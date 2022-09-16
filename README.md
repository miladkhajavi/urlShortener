<h1 align="center">Welcome to Shortener Service 👋</h1>
<p>
 
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## Clone project

```bash
  git clone https://github.com/miladkhajavi/urlShortener
```

## Install

```sh
npm install
```

## Usage

```sh
npm start
```
or

```sh
npm run build
```
or

```sh
npm run make
```

## API Reference

### Shorten URL
```http
  POST /generate
```

| Field | Type   | Description  |
| :---- | :----- | :----------- |
| Body  | `json` | url ?expireTime |

**Example:**

```http
POST http://localhost:5050/generate
{
    "url": "https://alocom.co"
}
```

### Get urls

```http
  GET /:id
```

| Parameter | Type     | Description     |
| :-------- | :------- | :-------------- |
| `id`      | `string` | Unique Code |

**Example:**

```http
GET http://localhost:5050/AjBcqAb
```
## Author

👤 **Milad khajavi**

* Website: [miladkhajavi.ir](https://miladkhajavi.ir)
* Github: [@miladkhajavi](https://github.com/miladkhajavi)
* LinkedIn: [@miladkhajavi](https://linkedin.com/in/miladkhajavi)

## Show your support

Give a ⭐️ if this project helped you!

***

 ❤️ Thank you ❤️
