# General Information
###**The Server Itself**
The [https://chat.roblox.com](https://chat.roblox.com) website runs ASP.NET version **4.0.30319**, last checked on *8/23/16*.

The site is also running a(n) SSLv3 server on `port 443`.

~~The site **may** be vulnerable to the SSLv3 POODLE Attack as well.
More information: [https://security.googleblog.com/2014/10/this-poodle-bites-exploiting-ssl-30.html](This POODLE bites: exploiting the SSL 3.0 fallback)~~

A single cookie is brought over from `*.roblox.com` or wherever the origin is.
The cookie is `rbx-ip`, and it is not secured, but it is an HttpOnly cookie.
