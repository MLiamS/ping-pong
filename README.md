# A website that takes input from the user and converts some integers into strings

#### 24 Feb., 2017, v.1.0.0

#### By Liam Stabeno

## Description

A website that takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:

Numbers divisible by 3 are replaced with "ping"
Numbers divisible by 5 are replaced with "pong"
Numbers divisible by 15 are replaced with "ping-pong"
### Specifications

|Behavior|Input|Output|
|:---:|:---:|:---:|
|Takes user input, and returns a integer of that number|"16"|16|
|Takes user integer and returns a range of numbers from 1 to the chosen number in an array |16|[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]|
|Create a function that replaces all integers from the integerString divisible by 3 to ping, divisible by 5 to pong, and divisible by both 3 & 5 to pingpong |[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]|[1,2,ping,4,pong,ping,7,8,ping,pong,11,12,13,14,pingpong,16]|
|Create a function to append the array to a list, and show that list to the user |[1,2,ping,4,pong,ping,7,8,ping,pong,11,12,13,14,pingpong,16]|<li>1</li><li>2</li><li>ping</li><li>4</li><li>pong</li><li>ping</li><li>7</li><li>8</li><li>ping</li><li>pong</li><li>11</li><li>ping</li><li>13</li><li>14</li><li>pingpong</li><li>16</li>|


## Setup/Installation Requirements

* This repository can be viewed or cloned from https://github.com/MLiamS/ping-pong.


## Known Bugs

There are no known bugs. I'd be interested to know if you find any.

## Support and contact details

Please feel free to contact liamstabeno@gmail.com for questions

## Technologies Used

* git v. 2.11.1

### Template
* git v. 2.11.1
* html5
* bootstrap v. 3.3.7
* CSS
* javaScript
* jQuery v. 3.1.1

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Liam Stabeno

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
