# Lambda editPDF Helper

#### Koji Nakagawa

## Description
* This program is helper function for [editPDFJson](https://github.com/KNaka88/editPDFJson).

## Prerequisites
You will need the following things properly installed on your computer.

* [AWS Account with access to IAM and Lambda](https://aws.amazon.com/)
* [Node.js 6.10](https://nodejs.org/) (with NPM)
* [editPDFJson](https://github.com/KNaka88/editPDFJson)

## Installation

Please make sure you have finished setting up all necessary setup for editPDFJson.

* `$git clone https://github.com/KNaka88/editPDFHelper.git`
* `$cd editPDFHelper`
* `$npm install`

Please add your api request uri, aws key/secret-key on your start.js
![start.js code](/images/tutorial.png)



event.json
```
{
  'text': 'anything you want to add',
  'x': 'x-coordinate',
  'y': 'y-coordinate'
}
```
You can add your comment and x, y coordinate on event.json

## How to Use?
From your command line,

```
$node start.js your-pdf-file.pdf event.json
```


Once the program runs, start.js read your pdf file and added to event.json as base64 data.
Then this will call your editPDFJson lambda api.

## Technologies Used
  * Node.js

## License
  _Copyright (c) 2017 **Koji Nakagawa and Stella Huayhuaca**_

  _Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:_

  _The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software._

  _THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE._
