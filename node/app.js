// ENABLE THE FOLLOWING CODE IF YOU WISH TO USE THE WEBSITE
// http://localhost:3000/


let {say} = require('../pkg/ssvm_nodejs_starter_lib.js'), hostname = '0.0.0.0', port = 3000, link, server = require('http').createServer(async (req, res) => {
  link = require(`akaneko`).wallpapers();
  res.end(final(say(`<a href="${link}" target="_blank"> Image </a>`), link));
 });
server.listen(port, hostname, () => { console.log(`Server running at [http://${hostname}:${port}/]`); });
function final(input, link) {
  let toappend = [];
  toappend.push(`<!DOCTYPE html><html lang="en"><head><title>Anime Wallpaper</title></head><body style="background-color:rgba(0,0,0,0.5);">`);
  toappend.push(`<form name="frm1" method="get"><input type="submit" value="Get A new wallpaper" style="min-height:35px;background-color:lightblue;border-radius:5px;"/></form>`);
  toappend.push(`<br /><b>${input}</b>`);
  toappend.push(`<br /><img src="${link}" width="720px" />`)
  toappend.push(`</body></html>`);
  return toappend.join(``);
}
