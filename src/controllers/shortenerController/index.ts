import { Request, Response, NextFunction } from "express";
import Url from "../../models/url";
import { validateUrl } from "../../utils";
import { generate } from "shortid"
import { DOMAIN } from "../../config";
export async function getShortenerUrl(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const url = await Url.findOne({ urlId: req.params.id });
    if (!url) return res.status(404).json({ message: "url not found" });
    url.clicks++;
    url.save();
    res.redirect(url.originalUrl);
  } catch (err) {
    next(err);
  }
}

export async function shortUrlGenerator(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { url, expTime } = req.body;
    const base:string =  DOMAIN;
    const urlId:string = generate();
    const expireTime:any =  !expTime ? null : expTime
    if (validateUrl(url)) {
      try {
        let result = await Url.findOne({ originalUrl:url });
        if (result) {
          res.json(result);
        } else {
          const shortUrl = `${base}/${urlId}`;
          result = new Url({
            originalUrl:url,
            shortUrl,
            urlId,
            date: new Date(),
            expireTime
          });
  
          await result.save();
          res.json(result);
        }
      } catch (err) {
        next(err)
      }
    } else {
      res.status(400).json('Invalid Original Url');
    }
   
  }