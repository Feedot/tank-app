window.onload=function(){function t(t){var e=l[+t],n=o[+t];for(j=0;j<o.length;j++)l[j].style.opacity=0,o[j].style.backgroundColor="transparent";setTimeout(function(){for(c=0;c<l.length;c++)l[c].setAttribute("class","paragraf");e.setAttribute("class","paragraf active"),e.style.opacity=0,setTimeout(function(){e.style.opacity=1},250)},500),n.style.backgroundColor="#64a4d7"}function e(t){var e=document.getElementById(t.getAttribute("name"));document.body.scrollTop=e.offsetTop-document.querySelector("header").offsetHeight,document.documentElement.scrollTop=e.offsetTop-document.querySelector("header").offsetHeight}var o=document.getElementById("numbers").getElementsByTagName("li"),l=document.getElementsByClassName("paragraf"),n=1,s=setInterval(function(){t(n),n++,4==n&&(n=0)},2500);for(i=0;i<o.length;i++)o[i].onclick=function(){clearInterval(s);var e=l[+this.innerHTML-1],r=this;for(j=0;j<o.length;j++)l[j].style.opacity=0,o[j].style.backgroundColor="transparent";setTimeout(function(){for(c=0;c<l.length;c++)l[c].setAttribute("class","paragraf");e.setAttribute("class","paragraf active"),e.style.opacity=0,setTimeout(function(){e.style.opacity=1},250)},500),r.style.backgroundColor="#64a4d7",n=+r.innerHTML,s=setInterval(function(){t(n),n++,4==n&&(n=0)},2500)};var r=document.getElementsByClassName("one")[0],a=document.getElementsByClassName("three")[0],y=document.getElementsByClassName("two")[0],u=document.getElementsByClassName("four")[0];setInterval(function(){r.style.left="80px",r.style.top="50px",a.style.right="90%",a.style.top="20%",y.style.bottom="50%",y.style.left="50%",u.style.right="80%",u.style.bottom="50%"},3e3),setInterval(function(){r.style.left="30%",r.style.top="80px",a.style.right="100px",a.style.top="50%",y.style.bottom="25%",y.style.left="10%",u.style.right="50%",u.style.bottom="30%"},6e3),setInterval(function(){r.style.left="120px",r.style.top="150px",a.style.right="160px",a.style.top="140px",y.style.bottom="310px",y.style.left="120px",u.style.right="90px",u.style.bottom="320px"},9e3);for(var m=document.querySelector("header").getElementsByTagName("li"),f=document.querySelector("footer").getElementsByTagName("li"),g=0;g<m.length;g++)m[g].onclick=function(){var t=this;e(t)};for(var g=0;g<f.length;g++)f[g].onclick=function(){var t=this;e(t)}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiYW5pbWUiLCJudW1iZXIiLCJzZWxmIiwicGFyYWdyYWZzIiwiYmFjayIsIm51bWJlcnMiLCJqIiwibGVuZ3RoIiwic3R5bGUiLCJvcGFjaXR5IiwiYmFja2dyb3VuZENvbG9yIiwic2V0VGltZW91dCIsImMiLCJzZXRBdHRyaWJ1dGUiLCJzY3JvbGxUbyIsImVsZW0iLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRBdHRyaWJ1dGUiLCJib2R5Iiwic2Nyb2xsVG9wIiwib2Zmc2V0VG9wIiwicXVlcnlTZWxlY3RvciIsIm9mZnNldEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImludCIsInNldEludGVydmFsIiwiaSIsIm9uY2xpY2siLCJjbGVhckludGVydmFsIiwidGhpcyIsImlubmVySFRNTCIsImNsb3VkT25lIiwiY2xvdWRlVGhyZWUiLCJjbG91ZGVUd28iLCJjbG91ZGVGb3VyIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwidG9TY3JvbGwiLCJ0b1Njcm9sbEZvb3QiLCJuIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBQUMsT0FBQSxXQXFDQSxRQUFBQyxHQUFBQyxHQUNBLEdBQUFDLEdBQUFDLEdBQUFGLEdBQ0FHLEVBQUFDLEdBQUFKLEVBQ0EsS0FBQUssRUFBQSxFQUFBQSxFQUFBRCxFQUFBRSxPQUFBRCxJQUNBSCxFQUFBRyxHQUFBRSxNQUFBQyxRQUFBLEVBQ0FKLEVBQUFDLEdBQUFFLE1BQUFFLGdCQUFBLGFBRUFDLFlBQUEsV0FDQSxJQUFBQyxFQUFBLEVBQUFBLEVBQUFULEVBQUFJLE9BQUFLLElBQ0FULEVBQUFTLEdBQUFDLGFBQUEsUUFBQSxXQUVBWCxHQUFBVyxhQUFBLFFBQUEsbUJBQ0FYLEVBQUFNLE1BQUFDLFFBQUEsRUFDQUUsV0FBQSxXQUNBVCxF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a0IsSUFDQW5CLEdBQUFDLEdBR0EsS0FBQSxHQUFBOEIsR0FBQSxFQUFBQSxFQUFBRCxFQUFBckMsT0FBQXNDLElBQ0FELEVBQUFDLEdBQUFkLFFBQUEsV0FDQSxHQUFBaEIsR0FBQWtCLElBQ0FuQixHQUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZD1mdW5jdGlvbiAoKSB7XG4gICAgdmFyIG51bWJlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVycycpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpLFxuICAgICAgICBwYXJhZ3JhZnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXJhZ3JhZicpO1xuICAgIHZhciBudW1iZXIgPSAxO1xuICAgIHZhciBpbnQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFuaW1lKG51bWJlcilcbiAgICAgICAgbnVtYmVyKytcbiAgICAgICAgaWYobnVtYmVyID09IDQpe251bWJlciA9IDA7fVxuICAgIH0sIDI1MDApXG4gICAgZm9yKGk9MDtpPG51bWJlcnMubGVuZ3RoO2krKyl7XG4gICAgICBudW1iZXJzW2ldLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnQpO1xuICAgICAgICAgIHZhciBzZWxmID0gcGFyYWdyYWZzWyt0aGlzLmlubmVySFRNTC0xXSxcbiAgICAgICAgICAgICAgYmFjayA9IHRoaXM7XG4gICAgICAgICAgZm9yKGo9MDtqPG51bWJlcnMubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgIHBhcmFncmFmc1tqXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgbnVtYmVyc1tqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZm9yKGM9MDtjPHBhcmFncmFmcy5sZW5ndGg7YysrKXtcbiAgICAgICAgICAgICAgICBwYXJhZ3JhZnNbY10uc2V0QXR0cmlidXRlKCdjbGFzcycsJ3BhcmFncmFmJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VsZi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncGFyYWdyYWYgYWN0aXZlJyk7XG4gICAgICAgICAgICAgIHNlbGYuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgfSwyNTApXG4gICAgICAgICAgfSw1MDApXG4gICAgICAgICAgYmFjay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzY0YTRkNyc7XG4gICAgICAgICAgbnVtYmVyID0gK2JhY2suaW5uZXJIVE1MO1xuICAgICAgICAgICAgICBpbnQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBhbmltZShudW1iZXIpXG4gICAgICAgICAgICAgICAgICBudW1iZXIrK1xuICAgICAgICAgICAgICAgICAgaWYobnVtYmVyID09IDQpe251bWJlciA9IDA7fVxuICAgICAgICAgICAgICB9LCAyNTAwKVxuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhbmltZShudW1iZXIpIHtcbiAgICAgICAgdmFyIHNlbGYgPSBwYXJhZ3JhZnNbK251bWJlcl07XG4gICAgICAgIHZhciBiYWNrID0gbnVtYmVyc1srbnVtYmVyXTtcbiAgICAgICAgZm9yKGo9MDtqPG51bWJlcnMubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICBwYXJhZ3JhZnNbal0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBudW1iZXJzW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IoYz0wO2M8cGFyYWdyYWZzLmxlbmd0aDtjKyspe1xuICAgICAgICAgICAgICAgIHBhcmFncmFmc1tjXS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncGFyYWdyYWYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3BhcmFncmFmIGFjdGl2ZScpO1xuICAgICAgICAgICAgc2VsZi5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9LDI1MClcbiAgICAgICAgfSw1MDApXG4gICAgICAgIGJhY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2NGE0ZDcnO1xuICAgIH1cbiAgICB2YXIgY2xvdWRPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvbmUnKVswXSxcbiAgICAgICAgY2xvdWRlVGhyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aHJlZScpWzBdLFxuICAgICAgICBjbG91ZGVUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0d28nKVswXSxcbiAgICAgICAgY2xvdWRlRm91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZvdXInKVswXTtcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsb3VkT25lLnN0eWxlLmxlZnQgPSAnODBweCc7XG4gICAgICAgIGNsb3VkT25lLnN0eWxlLnRvcCA9ICc1MHB4JztcbiAgICAgICAgY2xvdWRlVGhyZWUuc3R5bGUucmlnaHQgPSAnOTAlJztcbiAgICAgICAgY2xvdWRlVGhyZWUuc3R5bGUudG9wID0gJzIwJSc7XG4gICAgICAgIGNsb3VkZVR3by5zdHlsZS5ib3R0b20gPSAnNTAlJztcbiAgICAgICAgY2xvdWRlVHdvLnN0eWxlLmxlZnQgPSc1MCUnO1xuICAgICAgICBjbG91ZGVGb3VyLnN0eWxlLnJpZ2h0ID0gJzgwJSdcbiAgICAgICAgY2xvdWRlRm91ci5zdHlsZS5ib3R0b20gPSAnNTAlJztcbiAgICB9LDMwMDApXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjbG91ZE9uZS5zdHlsZS5sZWZ0ID0gJzMwJSc7XG4gICAgICAgIGNsb3VkT25lLnN0eWxlLnRvcCA9ICc4MHB4JztcbiAgICAgICAgY2xvdWRlVGhyZWUuc3R5bGUucmlnaHQgPSAnMTAwcHgnXG4gICAgICAgIGNsb3VkZVRocmVlLnN0eWxlLnRvcCA9ICc1MCUnXG4gICAgICAgIGNsb3VkZVR3by5zdHlsZS5ib3R0b20gPSAnMjUlJztcbiAgICAgICAgY2xvdWRlVHdvLnN0eWxlLmxlZnQgPScxMCUnO1xuICAgICAgICBjbG91ZGVGb3VyLnN0eWxlLnJpZ2h0ID0gJzUwJSdcbiAgICAgICAgY2xvdWRlRm91ci5zdHlsZS5ib3R0b20gPSAnMzAlJztcbiAgICB9LDYwMDApXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjbG91ZE9uZS5zdHlsZS5sZWZ0ID0gJzEyMHB4JztcbiAgICAgICAgY2xvdWRPbmUuc3R5bGUudG9wID0gJzE1MHB4JztcbiAgICAgICAgY2xvdWRlVGhyZWUuc3R5bGUucmlnaHQgPSAnMTYwcHgnXG4gICAgICAgIGNsb3VkZVRocmVlLnN0eWxlLnRvcCA9ICcxNDBweCdcbiAgICAgICAgY2xvdWRlVHdvLnN0eWxlLmJvdHRvbSA9ICczMTBweCc7XG4gICAgICAgIGNsb3VkZVR3by5zdHlsZS5sZWZ0ID0nMTIwcHgnO1xuICAgICAgICBjbG91ZGVGb3VyLnN0eWxlLnJpZ2h0ID0gJzkwcHgnXG4gICAgICAgIGNsb3VkZUZvdXIuc3R5bGUuYm90dG9tID0gJzMyMHB4JztcbiAgICB9LDkwMDApXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG8oZWxlbSkge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsZWwub2Zmc2V0VG9wIC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykub2Zmc2V0SGVpZ2h0KTtcbiAgICAgICAgLy8gdmFyIHQ7XG4gICAgICAgIC8vIC8vIGlmKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4yNTAwKXtkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDI0MDB9XG4gICAgICAgIC8vIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IGVsLm9mZnNldFRvcCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLm9mZnNldEhlaWdodCl7c2NyKCk7fVxuICAgICAgICAvLyBpZihkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA8IGVsLm9mZnNldFRvcCl7c2NybygpfVxuICAgICAgICAvLyBmdW5jdGlvbiBzY3IoKSB7XG4gICAgICAgIC8vICAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiBlbC5vZmZzZXRUb3Ape1xuICAgICAgICAvLyAgICAgICAgIC8vIHdpbmRvdy5zY3JvbGxCeSgwLC0xMDApO1xuICAgICAgICAvLyAgICAgICAgIC8vIHQgPSBzZXRUaW1lb3V0KHNjcigpLDIwKTtcbiAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIC0gMTAwO1xuICAgICAgICAvLyAgICAgICAgIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNjcigpXG4gICAgICAgIC8vICAgICAgICAgfSwyMCk7XG4gICAgICAgIC8vICAgICB9ZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSlcbiAgICAgICAgLy8gICAgICAgICBjbGVhclRpbWVvdXQodClcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBmdW5jdGlvbiBzY3JvKCkge1xuICAgICAgICAvLyAgICAgaWYoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPCBlbC5vZmZzZXRUb3AgLSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5vZmZzZXRIZWlnaHQrOTEpIHtcbiAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgMTAwO1xuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLGVsLm9mZnNldFRvcCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLm9mZnNldEhlaWdodCApXG4gICAgICAgIC8vICAgICAgICAgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzY3JvKClcbiAgICAgICAgLy8gICAgICAgICB9LCAyMCk7XG4gICAgICAgIC8vICAgICB9ZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgY2xlYXJUaW1lb3V0KHQpXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gZWwub2Zmc2V0VG9wIC0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gKGVsLm9mZnNldFRvcCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLm9mZnNldEhlaWdodCk7XG4gICAgfVxuICAgIHZhciB0b1Njcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpLFxuICAgICAgICB0b1Njcm9sbEZvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKTtcbiAgICBmb3IgKHZhciBuPTA7bjx0b1Njcm9sbC5sZW5ndGg7bisrKXtcbiAgICAgICAgdG9TY3JvbGxbbl0ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgZWxlbSA9IHRoaXM7XG4gICAgICAgICAgICBzY3JvbGxUbyhlbGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IodmFyIG49MDtuPHRvU2Nyb2xsRm9vdC5sZW5ndGg7bisrKXtcbiAgICAgICAgdG9TY3JvbGxGb290W25dLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgIGVsZW0gPSB0aGlzO1xuICAgICAgICAgICAgc2Nyb2xsVG8oZWxlbSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19
