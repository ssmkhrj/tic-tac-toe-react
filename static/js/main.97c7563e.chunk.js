(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],{15:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);var s=n(8),i=n(3),r=n(4),a=n(6),c=n(5),o=n(0),u=n(1),l=n.n(u),h=n(7),d=n.n(h);n(15);function j(e){return Object(o.jsx)("button",{className:"square ".concat(e.isWinningSq?"winning-sq":""),onClick:e.onClick,children:e.value})}var b=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"renderSquare",value:function(e){var t=this;return Object(o.jsx)(j,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},isWinningSq:this.props.winningSqs.includes(e)},e)}},{key:"renderBoard",value:function(){for(var e=[],t=0;t<3;t++){for(var n=[],s=0;s<3;s++)n.push(this.renderSquare(3*t+s));e.push(Object(o.jsx)("div",{className:"board-row",children:n},t))}return e}},{key:"render",value:function(){return Object(o.jsx)("div",{children:this.renderBoard()})}}]),n}(l.a.Component),v=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null),location:null}],stepNumber:0,xIsNext:!0,isDescending:!1},s}return Object(r.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();if(!p(n).winner&&!n[e]){n[e]=this.state.xIsNext?"X":"O";var s=Math.floor(e/3)+1,i=e%3+1;this.setState({history:t.concat([{squares:n,location:"(".concat(s,",").concat(i,")")}]),stepNumber:t.length,xIsNext:!this.state.xIsNext})}}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"toggleOrdering",value:function(){this.setState({isDescending:!this.state.isDescending})}},{key:"render",value:function(){var e,t=this,n=this.state.history,s=n[this.state.stepNumber],i=p(s.squares),r=n.map((function(e,n){var s=n?"Go to move #".concat(n," At: ").concat(e.location):"Go to game start";return Object(o.jsx)("li",{children:Object(o.jsx)("button",{className:n===t.state.stepNumber?"highlight":"",onClick:function(){return t.jumpTo(n)},children:s})},n)}));return this.state.isDescending&&r.reverse(),e=i.winner?"Winner: "+i.winner:"Next player: "+(this.state.xIsNext?"X":"O"),!i.winner&&s.squares.every((function(e){return e}))&&(e="Draw"),Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(b,{squares:s.squares,onClick:function(e){return t.handleClick(e)},winningSqs:i.positions})}),Object(o.jsxs)("div",{className:"game-info",children:[Object(o.jsx)("div",{children:e}),Object(o.jsx)("button",{onClick:function(){return t.toggleOrdering()},children:this.state.isDescending?"Ascending":"Descending"}),Object(o.jsx)("ol",{children:r})]})]})}}]),n}(l.a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var i=Object(s.a)(t[n],3),r=i[0],a=i[1],c=i[2];if(e[r]&&e[r]===e[a]&&e[r]===e[c])return{winner:e[r],positions:t[n]}}return{winner:null,positions:[]}}d.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.97c7563e.chunk.js.map