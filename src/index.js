"use strict";

exports.default = function (babel) {
  //var checkFlag = process.argv.slice(-1).pop() === "--replace-word";
  var source =  new RegExp("^src\\/", "gi");
  var replaceTo = "lib/";

  return {
    visitor: {
      ImportDeclaration(path, state) {
        //if (checkFlag === true) {
          if(source.test(path.node.source.value)){
            path.node.source.value = path.node.source.value.replace(source, replaceTo);
          }
        //}
      },
      CallExpression(path, state) {
        //if(checkFlag === true){
          if(path.node.arguments.length > 0){
            path.node.arguments.map(function loop(node, index){
              if(node.type === "StringLiteral" && source.test(node.value)){
                node.value = node.value.replace(source, replaceTo);
              }
            });
          }
        //}
      },
      ArrayExpression(path, state) {
        //if(checkFlag === true){
          if(path.node.elements.length > 0){
            path.node.elements.map(function loop(node, index){
              if(node.type === "StringLiteral" && source.test(node.value)){
                node.value = node.value.replace(source, replaceTo);
              }
            });
          }
        //}
      },
      ObjectProperty(path, state) {
        //if (checkFlag === true) {
          if(path.node.value.type === "StringLiteral" && source.test(path.node.value.value)){
            path.node.value.value = path.node.value.value.replace(source, replaceTo);
          }
        //}
      }
    }
  };
};

module.exports = exports["default"];