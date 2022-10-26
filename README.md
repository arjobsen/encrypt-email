# Encrypt your email address and phone number
Encrypt your personal data so it won't be directly readable from the HTML source code. Scrapers will not be able to harvest your personal data.

## Usage
Let's say your email address is example@example.com. First encrypt your email address using `encrypt("example@example.com")`. You can run this JavaScript function in the browser while having this page opened. Press F12 to open Developers Tools, go to the Console and enter `encrypt("example@example.com")`. This returns `fybnqmfAfybnqmf/dpn`. The encryption algorithm is easy: for each letter, return the next letter in the alphabet. But it will be enough to shake off scrapers searching for email addresses.

Include `<script src="encrypt-email.js"></script>` in your website. And put a placeholder anchor with `id="email"` as such `<a href=# id="email">Mail me!</a>`. When the page has loaded, call the JavaScript function to decrypt the string you've acquired before: `<script>document.getElementById("email").href = "mailto:" + decrypt("fybnqmfAfybnqmf/dpn")<script>`. You could wait a bit before decrypting, so you'll even mislead crawlers and scrapers which run JavaScript before extracting the source code!

See encrypt-email.html for a working demo.
