# crop-string


Trims strings to a maximum length and appends dot dot dot if needed.



## API Reference
**Kind**: Exported function  
**Returns**: <code>string</code> - A string that with a length that equals to or is smaller than maxLength  

| Param | Type | Default |
| --- | --- | --- |
| string | <code>string</code> |  | 
| [maxLength] | <code>number</code> | <code>16</code> | 
| [endString] | <code>string</code> | <code>&quot;\&quot;…\&quot;&quot;</code> | 

**Example**  
```javascript
import cropString from "crop-string"
const result = cropString("hello", 4)
result === "hel…"
```


## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

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
```
