# How to edit your links

Open `index.html` and look for these sections:

## Email button
Search for: `Email Us`
Edit the `href`:
```html
<a class="btn primary liquid" href="mailto:slipstreamstarship@gmail.com"><span>Email Us</span></a>
```

## Quick Links (in Governance & Join cards)
Search for: `<h3>Quick Links</h3>` then edit the list:
```html
<ul class="links">
  <li><a href="https://github.com/blarter4/Slipstream-Starship" target="_blank" rel="noopener">GitHub</a></li>
  <li><a href="https://discord.gg/yourInviteCode" target="_blank" rel="noopener">Discord</a></li>
  <li><a href="#docs">Documentation</a></li>
  <li><a href="#roadmap">Roadmap</a></li>
</ul>
```

- For external links, keep `target="_blank"` and `rel="noopener"`.
- For page sections (like `#docs`), use plain anchors without `target`.

## Footer nav
At the bottom, you'll see another nav block you can edit similarly.

## Tip: Testing mailto
- `mailto:` opens the user's default email app. In some browsers/devices, if no default is configured, nothing opens—this is a system setting, not a site issue.
- You can add a subject/body if you like:
  `mailto:slipstreamstarship@gmail.com?subject=Slipstream%20Inquiry&body=Hello...`

