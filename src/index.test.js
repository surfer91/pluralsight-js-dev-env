var expect=require('chai').expect;
var jsdom=require('jsdom');
const{JSDOM}=jsdom;
var fs =require('fs');

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', () => {
    const index =new JSDOM (fs.readFileSync('./src/index.html',  {encoding:'utf8', flag:'r'}));
      const h1 =index.window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!");
  })
})
