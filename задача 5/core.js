const parser = new DOMParser();
const xmlString =   `<list>
                      <student>
                        <name lang="en">
                          <first>Ivan</first>
                          <second>Ivanov</second>
                        </name>
                        <age>35</age>
                        <prof>teacher</prof>
                      </student>
                      <student>
                        <name lang="ru">
                          <first>Петр</first>
                          <second>Петров</second>
                        </name>
                        <age>58</age>
                        <prof>driver</prof>
                      </student>
                    </list>`;


const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelectorAll("student")
const resultList=[]


listNode.forEach(item => {
    const nameNode = item.querySelector("name");
    const  FirstNode = item.querySelector("first");
    const  SecondNode = item.querySelector("second");
    const  AgeNode = item.querySelector("age");
    const  ProfNode = item.querySelector("prof");

    const langAttr = nameNode.getAttribute('lang');

    const result = {
      lang:langAttr,
      name:nameNode.textContent,
      first:FirstNode,
      second:SecondNode.textContent,
      prof:ProfNode.textContent,
    };
    resultList.push(result)
    })
    console.log(resultList)