const logs = () => {
  return console.log(
    '%c这个网站是开源的哟！%c可以的话能给我一个star吗谢谢！♪(´▽｀)%c\n%c☆%chttps://github.com/WaleyChAn/express-antdesign-blog%c☆',
    `
    font-family: "Microsoft YaHei";
    padding: 10px;
    font-size: 14px;
    background: #f8b62b;
    border: solid 1px #f8b62b;
    color: #fff;
    border-radius: 10px 0 0 10px;
    `, `
    font-family: "Microsoft YaHei";
    padding: 10px;
    font-size: 14px;
    border: solid 1px #f8b62b;
    color: #f8b62b;
    border-radius: 0 10px 10px 0;
    `, `
    `, `
    color: #f8b62b;
    `, `
    font-size: 14px;
    padding: 8px;
    `, `
    color: #f8b62b;
    `
  )
}
export default logs
