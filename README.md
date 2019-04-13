# hasprotocol
Returns true/false if string starts with a protocol such as http

```javascript
hasProtocol('http://') //true
hasProtocol('http://hello') //true
hasProtocol('helloworldhttp://hello') //false


hasProtocol('https://') //true
hasProtocol('https://hello') //true
hasProtocol('helloworldhttps://hello') //false


hasProtocol('localhost://') //true
hasProtocol('localhost://hello') //true
hasProtocol('helloworldlocalhost://hello') //false


hasProtocol('file:///') //true
hasProtocol('file:///') //true
hasProtocol('helloworldfile:///') //false
```
