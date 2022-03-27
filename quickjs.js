function handleCategory(v, idx) {
  let res = `<h3 id="${v.innerText.trim().replace(" ", "_")}"><a href="${v.children[0].href}">${v.innerText.trim()}</a><span id="weapons_totals_${idx+1}"></span></h3>\n<ul>\n`;
  let cur = v.nextElementSibling;

  let weapIdx = 0;
  for (; cur.tagName != "HR"; cur = cur.nextElementSibling) {
    if (cur.tagName != "DIV") { continue; }
    for (let weap of cur.children) {
      if (weap.getAttribute("class").indexOf("col-xs-6") == -1) continue;
      if (weap.children[0] == null || weap.children[0].children[0] == null) continue;
      res += `  <li data-id="weapons_${idx+1}_${weapIdx+1}"><a href="${weap.children[0].children[0].children[0].href}">${weap.innerText.trim()}</a></li>\n`;
      weapIdx += 1;
    }
  }
  res += "</ul>";
  return res;
}
//handleCategory(temp0, 0)
(function() {
let arrs = Array.from($("h3[style='text-align: center;']")).map((v, idx) => handleCategory(v, idx));

return [arrs[9], arrs[25], arrs[16], arrs[4], arrs[26], arrs[19], arrs[8], arrs[7], arrs[20], arrs[28], arrs[0], arrs[13], arrs[18], arrs[11], arrs[29], arrs[5], arrs[24], arrs[15], arrs[17], arrs[22], arrs[30], arrs[10], arrs[3], arrs[2], arrs[21], arrs[14], arrs[6], arrs[1], arrs[12], arrs[23], arrs[27]]
})().join("\n")
