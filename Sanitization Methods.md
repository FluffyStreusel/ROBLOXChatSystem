# Sanitization Methods of the Chat System

## htmlEntities

`htmlEntities`: Replaces HTML code to the point it cannot do harm.

```
htmlEntities: function(n) {
            return String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}
```

**Function breakdown of `htmlEntities(n)`:**

1. Replaces all messages with an ampersand (&) disabling them with `&amp;`.

2. Replaces all messages with brackets (< and >) disabling them with their counterparts `&lt;` (<) and `&gt;` (>).

3. Replaces all messages with quotes disabling the plaintext quotes with `&quot;` (").


## sanitizeMessage

`sanitizeMessage`: Changes message content by running htmlEntities(n) where n is the message, and then adds linkify code to the message.

```
sanitizeMessage: function(n) {
            n && n.Content && (n.Content = this.htmlEntities(n.Content), n.Content = this.linkify(n.Content))
}
```

**Function breakdown of `sanitizeMessage(n)`:**
1. Runs htmlEntities(n) through the message and then applies Linkify to the message.

## SanitizeMessages

`santitizeMessages`: Does the exact same thing as sanitizeMessage except for multiple messages.

```
sanitizeMessages: function(n) {
            var t, i;
            if (n && n.length > 0)
                for (t = 0; t < n.length; t++) i = n[t], this.sanitizeMessage(i)
}
```

**Function breakdown of `santitizeMessage(n)`:**
1. Allows for multiple messages to be sanitized at once.

## Linkify

*(Not necessarily a sanitization method)*

`linkify`: Turns input into links

```
linkify: function(n) {
            return angular.isDefined(Roblox) && angular.isDefined(Roblox.Linkify) && typeof Roblox.Linkify.String == "function" ? Roblox.Linkify.String(n) : n
}
```

Function breakdown of linkify(n):
1. Runs Roblox.Linkify.String(n), which turns n (a string) into a clickable link.
... Ex. Roblox.Linkify.String("https://chat.roblox.com")


