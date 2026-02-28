// ==UserScript==
// @name         语雀文档导出
// @namespace    http://tampermonkey.net/
// @version      2.2.1
// @description  代码基于 W871054028 的代码, 并使用 ai 进行修改, 实现将语雀文档导出包含 markdown, 图片等内容的压缩包
// @license      MIT
// @author       waitsalt
// @match        https://*.yuque.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE72lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDMgMTE2LmRkYzdiYzQsIDIwMjEvMDgvMTctMTM6MTg6MzcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDgtMDRUMTU6Mjk6NTQrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA4LTA0VDE1OjMxOjM5KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA4LTA0VDE1OjMxOjM5KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxZmNjMTNiZC1iNjg0LTU5NDMtOTE2Zi00NmEyOTc2MWFiMzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MWZjYzEzYmQtYjY4NC01OTQzLTkxNmYtNDZhMjk3NjFhYjM5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MWZjYzEzYmQtYjY4NC01OTQzLTkxNmYtNDZhMjk3NjFhYjM5Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZmNjMTNiZC1iNjg0LTU5NDMtOTE2Zi00NmEyOTc2MWFiMzkiIHN0RXZ0OndoZW49IjIwMjMtMDgtMDRUMTU6Mjk6NTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6nIOQ9AAAVN0lEQVR4nL2bebAn11XfP+fc7t/y1nmzSRrNotHisT2SbFlIkVJYEiQhREq54q0CjisVG0zKAYFkSBFi/rALOwG7QClkShQGO6FiygUGnKpYuKBMIhVVKAEsx7aMpNFoNJrRSJqZN8tbfr9fL/ee/NH7772RZyTZ91W/7tv3/rrvOed71u6Wd3zzl9isqTiWk1Ocz85hZvSc0HdKHCl4IdOUhXhAT4UgOUmao3gGgxjNI8Q8uBwJcp2Y3RzhblSRa/OQ7VPYpsKMQE8AFVKFEcJyT+Ojgj0TxH/Tifxdz9khj0Nx9J0nDxngiPoRLo+IvbFuYwI9XARITp4ZPgMB+ovGzDawsCmZRJuffnVNpNhCCHdY8O8Sbz8MdoMCOSliEIkSFMxABRQIBiaggWsmIblVBZwoiJEG+Rbq/xKRP5GIR0WK375e7TUxwAAVKSiBbeblJ5JR/q8JHARDEVRK4kRBIAiIFYyiJETKcwgIigGBgtBgdoMGuyFI9nMj4wkR+f2e4/dUZVnaF3mVTV/1LwVidYRgW5Ik+0SehcPe82t5zsEAmAgmxfKMQsrVZjVxBaHtsUDzm3oTwYAk52Ca82vj1B+eTLJPmNmWSN33nwEiggYl8cnPrKxPDo8m+UeBxVBKOFhDoKdLeDDw08RXTGoxpj2nOkaK+weTxck4/+jqeHJ4FJKfEZQCDd8HBqgIJuFAyOyR1VHyYIbfKqI1MTZFWFuytXQ3mzM915rr2TSTAFElN7/1fJI8mOb2iBAOiF46Ey6JASqQ5f4D4zT9jsffIeIwZCPxtKRJV7JtAs022VdjXIA51kaEgCi5hTuSNP2O9/4DcokivejpKkKah99YT/PPeUMNLRcnGxbc1u9pXW+rxAVR0N63N2vZhRY6QAiIppPsc1kSfuNStOGivIAg5D78UcDeU9ndYCBiqBV6b1ZwszLMcoFz1XwtiRKasc6ccswo5iqt+5TGVdv3kUIYWcr9ztkeEXnvxTiIV0SAlH9gX/HGe0AwpHJPmElHV6cl2DFsbC7lztgFvMErocNaxrXwGOAD7wlmX7kYJESOzd2IK8Hhzf+xGHeraB2BBKkkZ4gIYlb48LYkaybSjFVcLz1FZ6wcrOMBa36/KYJKJlRz29fUAhV3E+yPEd7tIsO8YJtAIkpksuGkGfQ0YuInDwTv3xVp3CLHwAofHzDEDBUhmHUCmirCazOkgGnTfyXVqH/PlLq09y3419dp3Tf39q58og+kibs/zz2UeO4w4Ex+tks8EEWObDL5V+vp+D6nPcAK4Ut1CSv5UHK1JF5rg1RMbtuImghrUEBL15FNpC9dojvXmJJ8ZSvq3xloJCTrdl/2ov6tG0RfwG9MCOTAo+9tST6grsfsYGZ3Olk/Fiygqi2ulVCvWVUsJBLHyI95KT2FYGg5p5K6UqBEBRyCE8GJEpVbrI5IHLE6+hLR0xgnWlicknnT16wQpO1z0jCqOocV61mcnd3jc3c88YF2uCA/8uJ/rmmL4j6TyTlefPY7Xxf0psi5QsKbEN3sjDU/5tqZ3fzQ0i2cypYxjJ5EqEg9JxAIeHzIyS0ns4zUUtKQkISExCZMwoSRX+N8vkISJsxHM+yIt9LTmMLGt4huEb/h3NTeQkBEH792x+Btsz0h9Q0DogNhV03ags7xZDL+0LN5etNcb7aEp5SILxSrcltgmFSeAk4kp7h9y1u4Y+ltG2C2WTMzMsvJLCe1lCSkjP2E1XyVE+mLHB4d4VtrT/D42v9j7EfsGexiqH2C+a660NiPjgqVewNUlXE+ucn5bR/a7S7/7Lof11ZX3n74XgxwcYQf5/0zx148Ty/qq2gt8cadtNHQ9GNxnM7OciI5xX+7/lf48ct/lNPZecyshi0VM2soC4oWqqGKw+GkUIWqefN8ffWb/M/Tf8ZXTn8VJ8Ke/i6MQoSVKtT7cq2bqQbBCKbJFdu3LLooTnxpD9y1P/+DRC4iUmV1ZeUTk3F+l4tcuegG66/UDxhzboZIlD946WHuWLqZN83uZyVfq5OUwqc3fwHDE8jNk4ec1DKSkDAOE8ZhwiiMCWZcPdzHDy29nbfM3cC31v6ep0fPsBQvddbS2bcP2+dE8OajyFm0tS9fi8jpiUdu/pufBhFU3cz6yukVk+C0gkfHZ1gXCdPIoEiPj4xfYN/gCr52y+8w0B4r+Xq9lsYJWXd11fi0jyqZFuHYEi8yCQn3P/0fePTcX3Fg5hpKp3pBJEyjwAxiMb9tThdyY2QGmro+eTzD+uj8h4PPnKirl1tFWdUSm35r3Jp+FjxXDa7k8bWn+O1jf1TqbKi8JqGWP/X/6opVfD/dBMETOJWeZqB9HnrjA/zDxds5NDqC4DpR4HSEWGeQ1sQGk1zcmTR8OB7muH6G7r9ijr07h0Qu+tlgCqG9LCmCnk6/y5RG/kXfW+CK3k6+fPJ/83J6hoVotiDcjFBupQ2dJp+AFVneJoxQcZxMTwPw69f9J/YM9nAiOQlVBck2JmJ15tgaDxgu6M/OxYvMDbaip08c56Wjz96WjEd7XVxGfDaFxc6CGqZs1jdgR7yFp9ef56/OfoNZN6TSfsqjYFYzpZvVFa2S4HRz4jiVLrMQzfELe3+OVT8iD35DwaVdRJnOJiMnrCW29/Cy3Xb8nBCtjXpk3n4MCVTAlJIJJpXc266wNX6BvqIkIePJtSNwWZsYqybXzKp9jVQxZjMmJkV015KHirLq1/nhrW/n9sVb+cOX/5R9g91lcAVDHbCjtxUnjkBoIk+abBIMyUc/Fql7LCL2EMLdYlJL3sRqojp9iitY2wts0g9ihbSyczUxhrVobygKYkUsYa1UpRNASceVAkz8hBkd8u92f4i9gz0MtEdmGdvjJc5l53ls5f8wCQk9jevcoA6dC/Lxgbu92X2Rz7J9ZnZd5xal9NtGvktkSZC0mACdPlbYgyJVaIxfZe1rlbHGQ0jJjOp6dbZUMq3yEirKcnaGt8wf5Kb56+tlPzt+jt878ftMQoqWRjrQyhRbnjM3u85S2xelWX5bJK5lmdsqUMKlIlqg0XZppFrJyxqmBDPm3WwhZQtd/lrTFQpmG0VEVzBW6onFOPV4NeTEsZyeYS6aZagDfvv4f+W3jn8WFdjbvxLXylDLILYTPRIEr/42nYtn35qGvJZ8x8AZXS9gYJ1+4xor1lktLWHv4PLyMo2lM2s8QhUQWYmS0HaR1j4urlJ5iWp9Pe0x1AG/fvQhPvbsp9kab2Vvf29pBG1DoaV2mQaZ5fQZvjWSINe14VkxoqsCFfs260tlser+xKcsRQscnL2aUT7BLHSw0taUxjA0LrXQVaFTwrAimrMSisEC2/rz/I9Tf86njj7EG2fewFB7ZOYLYyolYlrHtO6dh4Cg1+lKPt4bS1xKui39tv+/+L6Kcmxyktu33MgtCwc5mZwrJdBIvA6IjAYVpXs0CzUa2kXQGknlfiGaYzk9ywNHf5cd8XZ62ic36xZjaX4/XVJzxKz79b2qItvaEK+0vII4U0zZ2G8WKCaMfEJfY35y179ARUktL4mxFgxbKlAHRlbbu86cFoNqg2rGwPX58qm/4Dvrh9nZ20lu4aJqj2ZlZVogeNmmGMMWMGu9n+5bp9+VfGULVByH11/g/Vf8M35k2y0cGZ2AtvQtEELDjIrIapxa9xuZTxc/jcIAegv89fnHGegQXwZUnWJsa7/hKVRzbhgBvep+JtLI116pv9ErOHEcn5ziwOw+fn7v+zidnsebR9Faf6HlBq06LmOHaqyl++37ByovIAy1z0vJaY6MTzAfLeBbJbnK5bVdX2VmNtQnjZ4aU1aerhewKa+w2TgIIz9hNR/z8Wt+kj2DyziRnK5JKfS96wFCqeu19a8QQXG+RkOtAk0y1dOYc/kKK/mISKKOzvv23rrwb6PBlzRHGGmTh5a4kUrOjWWfjuSmvcTh8Qk+svdf8s4dd/HU+vN1Ftf299VeStvha0stdUSIFdFh7fNLj2PluoJBbgEnDkFL+EtZEbJNS+60vEBV0i/L6qmCjBu9LnW9pee1cbyA1XfiODQ6xj9eupX/uP/fcGxyijTkhAAhGN6qLZQeoPirfH2wUNuGStKFxAqkUKKnWY0x8hMu6+1ge28bK/monruZzlfnPFMGsdjG6s2WrQWAYic1ka/kBSIinhu/zL7hFfzmgfvIQ87p5CzeB1Kfk+Q5We7xIRTwLg1gwYyWQ+y4wcZFWk08naxxHBKW4jlunj/IcrYCuI1PlaZgX/ercwGCsqzzbub5zPuule8woVKBbl/F8XJ6lp5EfOYNH2HRzfH02nEUJdaIoesxcHGRlYXAJE+Y+IQ8hFrffWMhuhFih4h2CaVyhwUT//mOu9gaLbHuJ/VD2g3vGtBlRLUlljHUmecjxA41/ry0urWhn+4X+uNQVvIRZ7JVfusN93Pb4ps5kZ3m6oVdDFyPSF3xHgEQQiALOROfsp5PWM9HJD6l5+LiDROK2L94+qAlgVpkbVIlXpU9sHKpwsnkLP9g8SD/dPsP8sWX/ow3zu4rPUXjUSob0D6unk6JKHkIh3TVT74Ra9TovU3ZgcoLlHZAUMYh5fjaCT6+/4P82/33QA/2L+xi22CRQdRDRWtmReqYjYfsGC6xb+5yrprbxc7BEsECozxpYoFaukypQ9selGKlKKkDvO+yuxnqgCTkJaoqNWg9uG3Zg8pLCBETS7+hEvSxKshot5aNr1VAEPLgObLyHL9wzfv56JveBw6cKolPSXxaVmhCDWdvBQISn5KGjGHU58rZnVw9v5uFeIaxTwubYNTGsUmfW1Wjlj0oViScTM5x59a3cdfSLZyYnMZqoqVhBtJ9v6C2E4YP4TGNXf+oijtkbR/fsgNVX8rxZ1aP8BNXvZtPX/9TGHA2HeHDBV7C26RV6jB0ffbP72Z7fwsTnxFClQM0TGik3vJIFQiASUhwovyTbbczCUktqAIx0rb23fJYMEzcIYv6R9U7JYeHrc4z25BvpO/E8fT5w9xzxV387lvvB+Bsuo5KGykX35KQkoec3bOXsa23wMQnVEW5OumxJozuosCoLFTmPbcuHmT34HLGPin5VdqfskxXSd6X6h2C4YWH6Tl0fjBhvue/SFv3p6x+LBF/v/ocN2+9gS/f8rGaeHepL+S0miDkpXpcObuTmWhIkqctyz/NjiYfqI4BzuarXDvYw4GZqziXr3VimIA1VWEEs6LvMWbFvjiXe3T3rj3s3b//sf5weDTLqsJItRNijXhq7Th7hpfz1ds+SaTK2XRUvPj4GltRmspRUS4bbsWwMrKbdnyteKBjC4w0pMzFQ64e7mbdj6kTu5Yggwmeor6Y5SnRYPbo4q4Djw137EefPLHG4ZfXSfPswcIJaX2BWBxHR6cYao+/uP1X2d5f4Gw2etWw35wJQuJT5uIZ5qNZUp/V0qtE2TCkIrtiRXNu92AnFhpk1Eyo7EcLFSGLHjy1nHPi1AR15hGfMbtl60Pa63nzHqNIbV9OzjPKx3zltl/hwPyVnM/GtN8WeD2bijIXz5ZENCjoEmybPi8A2B4vEWs8NacbvOXeUIl9b371IW/fBnkK3RItsSVaYpHF0UBmPp2VKexqPubs+DR/8AO/xJ3br2cln2xwla9n8xYYRj0icWVeUAmwsGDWEne7mlSdXIhmiSUuSuC0a5VVwRZy7+ktzHx6uHXbaLC0k8HWnaiN1gjrqzBeY74//JgLmkzylJdWj/OpG3+aH999B+t5SrDwPZJ90YIFYo2INaoLHBbaKKhwQH2m/m8wkD4RrnGdtR0ojkMwIgvJcLj4sSxbIEvnydN5ohvf2NTVF/pzybdfeOber379S79z7w0f4N9f906SkJOG/HXV+82aYThRnCohD1A++KQKKcs5UklX6AhEpIhSgbrY2jxjMEb5iJv23nbvgaU3JWvJav2GZPSXp79dX8TFMYfPPffZd1x1z4d/8y0/dVMwGOXp95x4OoRKJ+Krx6jGrXk4QHM+CVlZEa6MuNVvsAQfGESDx8/E2We/nj2PD0n90+jBuXfWnRAC2ZWeu/fe/o4Ax85lr83Xv5pmU5bGarkLnVrlFA/OZitMfFoXXiomeDOcU+L+/DteeO5pQkiRFk3Rj+69dbN1HF/16fsF/vvrRdh3a0XiV+QOVUWqzQozq78baL/tV6Hl+OQUWchpVS2LmWZEA/f+4NLj/RmHMOzcN/IXsO1zrveFdfiBzOf3fT9UQChesMiCp1WKbY2XzbonnCg+BA6NjhFrj7pgi5GHnIX+3H/Z2d/xhcRn1O97tlp0IdIEiNXd783vxXjXa6TvuzYnynqYkIWcXvkVyDQK6oXRDCxEsxwdv8QTq0fYEs8X1WYpcghR/ZNe1L9/wAyx+OkrAa/wsnTlgwV5N/DwayHuYpqKMs6LdFpEaWl7sZYNkipS34XeLH9z/kmeXH+eBTdbnwd5WEXfbWbklpFf4O+iLJyI3IPIl76XgVDhqiYbYg2hqSdPtyof+fPT/7ewHRQ2QUW/JCL3bIKfjde42MWp6Hud6gMXM/9SW6SOiU9Zy8bEbrNPGLrFGaQInHYPtvO3Z5/i4VN/zZW9nfhgRC5+wKl777Q3uVC7BB9nOHEfceo+CISLvcF3v6oRa8T5ZMQ4T4nEtR1Z3aZRoKKoUz5//GFenpxj6AZhZtD/YD+OP7IhjniFdklOvkTC52Pn3qwij74eLHDiyEPOcrKC0+KhOFK8X1BEd9OPViA3z1Wzl/O/Tj3O544/zP6ZXY/2etGbe5H7PHZpornkKKd4/VWeijS6M1K9FzjTLlpc0rUw+i5mebLKSrrOwMX1s7zmOVIZ+LXiny1ujnPJGh9/+vNn5mcW7p2fnbvTsKfsEomHV/ndYHUTFflMpO6aWKNPCpy/VEbEGpH6jBdHy8TqigepVNJvw777ocPO/sL5X33uDz/52Prha67fcvVncvzG8Pki22uKc8v63LlY3C9H6q4R0V9UkSc29d+btJ5GvLC+zChPGLhe/aJz85S4fJxrRd+pPtFz8S8GZ9ccS0/+8kw0PJf59OJudoH2unw8XXJ/WVU/5YxPBbjTCO804x8ZVqabVUxfzB9GfZYnK7w8OstM1C8SrvrhS/GnCCL6bafyNXXuT/sSP1J9ujTvZoo3wV7j2l/Xr8erPNQJjwTRR8qixXUBuxn0RsGuBdsXabRtnCczz6+d7EUqxBqlCCMnsuxEj6rIM4J8UzX6u0j0kKghKsUn8K8S6hdq/x/jkkKcSKSyLAAAAABJRU5ErkJggg==
// @grant        none
// @require      https://unpkg.com/turndown@7.1.2/dist/turndown.js
// @require      https://unpkg.com/jszip@3.10.1/dist/jszip.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// ==/UserScript==

(function () {
    'use strict';

    // 添加毛玻璃效果的CSS样式
    const addStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            #yuque-md-export-btn {
                padding: 5px 10px;
                background-color: rgba(51, 112, 255, 0.8);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-weight: bold;
                backdrop-filter: blur(10px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
            }

            #yuque-md-export-btn:hover {
                background-color: rgba(51, 112, 255, 0.9);
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
            }

            #yuque-md-export-btn:active {
                transform: translateY(1px);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            }

            #yuque-md-export-loading {
                backdrop-filter: blur(8px);
                background-color: rgba(0, 0, 0, 0.7);
                border-radius: 12px;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            }
        `;
        document.head.appendChild(style);
    };

    // 添加导出按钮
    function addExportButton() {
        // 检查是否已添加按钮
        if (document.getElementById('yuque-md-export-btn')) {
            return;
        }

        // 检查是否在文档页面
        if (!document.querySelector('.ne-viewer-body') &&
            !document.querySelector('.article-content')) {
            return;
        }

        // 查找目标元素
        const targetContainer = document.querySelector('.header-action');
        if (!targetContainer) {
            return;
        }

        const exportButton = document.createElement('button');
        exportButton.id = 'yuque-md-export-btn';
        exportButton.innerHTML = `👇MD`;
        exportButton.title = '导出为Markdown文件';
        exportButton.onclick = exportToMarkdown;
        exportButton.style.marginLeft = '8px';

        // 将按钮添加到目标容器的最右侧
        targetContainer.appendChild(exportButton);
    }

    // 导出为Markdown
    function exportToMarkdown() {
        try {
            // 显示加载提示
            showLoadingMessage('正在导出Markdown...');

            // 获取文档标题
            const title = document.querySelector('.index-module_articleTitle_VJTLJ')?.textContent ||
                document.querySelector('.doc-article-title')?.textContent ||
                document.title.replace(' · 语雀', '');

            // 获取文档内容
            const contentElement = document.querySelector('.ne-viewer-body') ||
                document.querySelector('.article-content');
            if (!contentElement) {
                hideLoadingMessage();
                alert('无法找到内容区域');
                return;
            }

            // 克隆内容以避免修改原页面
            const contentClone = contentElement.cloneNode(true);

            // 预处理多媒体元素
            preprocessMultimediaElements(contentClone);

            // 配置TurndownService
            const turndownService = new TurndownService({
                headingStyle: 'atx',
                codeBlockStyle: 'fenced',
                bulletListMarker: '-',
                emDelimiter: '*'
            });

            // 添加自定义规则
            addCustomRules(turndownService);

            // 转换为Markdown，增加等待时间让图片加载
            setTimeout(async () => {
                let markdown = turndownService.turndown(contentClone);
                // 添加标题
                markdown = `# ${title}\n\n${markdown}`;

                // 后处理清理
                markdown = postprocessMarkdown(markdown);

                markdown = markdown.replace(/(<\/?[^>]+>)/g, '\\$1')
                markdown = markdown.replace(/\\([-_#\[\]])/g, '$1');

                // 提取并处理图片，保存为单独文件
                const result = await processImagesToFiles(markdown, title);

                // 下载 ZIP 文件
                downloadZip(result, title);
                hideLoadingMessage();
            }, 100);

        } catch (error) {
            hideLoadingMessage();
            console.error('导出过程中出错:', error);
            alert('导出过程中出错，请查看控制台获取更多信息。');
        }
    }

    // 预处理多媒体元素
    function preprocessMultimediaElements(contentElement) {
        // 处理视频卡片
        const videoCards = contentElement.querySelectorAll('ne-card[data-card-name="video"], div.ne-card-video');
        videoCards.forEach(card => {
            // 创建替代元素
            const videoPlaceholder = document.createElement('div');

            // 尝试获取视频源
            const videoElement = card.querySelector('video');
            if (videoElement) {
                let videoSrc = '';
                const sourceElement = videoElement.querySelector('source');
                if (sourceElement && sourceElement.src) {
                    videoSrc = sourceElement.src;
                } else if (videoElement.src) {
                    videoSrc = videoElement.src;
                }

                if (videoSrc) {
                    // 直接使用真实视频地址
                    videoPlaceholder.innerHTML = `<video src="${videoSrc}"></video>`;
                } else {
                    videoPlaceholder.innerHTML = `<p>[视频内容无法获取]</p>`;
                }
            } else {
                // 如果找不到视频元素，尝试从页面中查找视频信息
                const videoInfo = findVideoInfoInPage(card);
                if (videoInfo) {
                    videoPlaceholder.innerHTML = `<video src="${videoInfo}"></video>`;
                } else {
                    videoPlaceholder.innerHTML = `<p>[视频内容无法获取]</p>`;
                }
            }

            // 替换原卡片
            card.parentNode.replaceChild(videoPlaceholder, card);
        });

        // 处理控制元素，避免导出无关内容
        const controlElements = contentElement.querySelectorAll(
            '.ne-card-video-content, .index-module_controls__1JsEA, ' +
            '.Seek-module_component__3Jd8h, .index-module_bottom__z1Gae, ' +
            '.PlaybackRates-module_component__3rglH, .Volume-module_component__1UMWx'
        );
        controlElements.forEach(el => el.remove());

        // 处理图片卡片
        processImageCards(contentElement);
        function getLineTextWithIndent(lineElement) {
            let lineText = '';

            lineElement.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    // 文本节点，直接加，保留空格
                    lineText += node.nodeValue.replaceAll(' ', '&nbsp');
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    // span、其他包裹的节点，也取里面的文本
                    lineText += node.innerText || node.textContent;
                }
            });
            return lineText;
        }
        // 处理其他卡片类型
        const otherCards = contentElement.querySelectorAll('ne-card:not([data-card-name="image"]):not([data-card-name="video"])');
        otherCards.forEach(card => {
            const cardType = card.getAttribute('data-card-name') || '未知类型';
            const cardPlaceholder = document.createElement('div');

            if (cardType === 'codeblock') {
                // 专门处理代码块 (保持你原有的逻辑不变)
                let codeText = '';
                const codeContent = card.querySelector('.cm-content');
                if (codeContent) {
                    const lines = codeContent.querySelectorAll('.cm-line');
                    codeText = Array.from(lines)
                        .map(line => getLineTextWithIndent(line))
                        .join('<br/>');
                } else {
                    const codeElement = card.querySelector('code') || card.querySelector('pre');
                    if (codeElement) {
                        codeText = codeElement.textContent;
                    } else {
                        codeText = card.innerText.trim();
                    }
                }
                if (!codeText.trim()) { codeText = '[空代码块]'; }
                const markdownCodeBlock = `\`\`\`<div><br/>${codeText}<br/></div>\`\`\``;
                cardPlaceholder.innerHTML = markdownCodeBlock.replaceAll('\\\\', '\\').replaceAll('\\<', '<');
            }
            // --- 新增：专门处理画板 (board) 和脑图 (mindmap) ---
            else if (cardType === 'board' || cardType === 'mindmap') {
                // 尝试查找画板的预览图
                const boardImg = card.querySelector('img');
                if (boardImg && boardImg.src) {
                    let imgSrc = boardImg.src.split('?x-oss-process=')[0]; // 获取无损原图
                    cardPlaceholder.innerHTML = `\n![${cardType}](${imgSrc})\n`;
                } else {
                    cardPlaceholder.innerHTML = `\n> [!CAUTION] ${cardType}内容无法直接导出，请手动截图\n`;
                }
            }
            // ----------------------------------------------
            else {
                cardPlaceholder.innerHTML = `<p>[${cardType}卡片内容]</p>`;
            }

            if (card.parentNode) {
                card.parentNode.replaceChild(cardPlaceholder, card);
            }
        });


        // 移除不需要的元素
        const unwantedSelectors = [
            '.ne-viewer-header',
            '.ne-heading-anchor',
            '.ne-heading-fold',
            '.ne-td-break',
            '.ne-table-right-shadow',
            '.ne-card-container',
            '.ne-card-video-content',
            '.Overlay-module_component__11R_9',
            '.index-module_controls__1JsEA',
            '.Time-module_component__2c6Qh',
            '.PlaybackRates-module_component__3rglH',
            '.Volume-module_component__1UMWx',
            '.ant-slider',
            '.Seek-module_component__3Jd8h'
        ];

        unwantedSelectors.forEach(selector => {
            const elements = contentElement.querySelectorAll(selector);
            elements.forEach(el => el.remove());
        });
    }

    // 处理图片卡片 - 专门的函数
    function processImageCards(contentElement) {
        // 查找所有图片卡片
        const imageCards = contentElement.querySelectorAll('ne-card[data-card-name="image"]');

        imageCards.forEach(card => {
            // 查找图片元素 - 考虑多种可能的图片选择器
            const imgElement = card.querySelector('img');

            if (imgElement && imgElement.src) {
                // 获取alt文本
                const altText = imgElement.alt || '图片';

                // 获取原始图片URL，移除可能的处理参数
                let imgSrc = imgElement.src;
                // 如果是阿里云OSS处理的图片，尝试获取原始URL
                if (imgSrc.includes('?x-oss-process=')) {
                    imgSrc = imgSrc.split('?x-oss-process=')[0];
                }

                // 创建替代元素
                const imgPlaceholder = document.createElement('div');
                imgPlaceholder.innerHTML = `![${altText}](${imgSrc})`;

                // 替换原卡片
                if (card.parentNode) {
                    card.parentNode.replaceChild(imgPlaceholder, card);
                }
            }
        });

        // 处理常规图片元素
        const regularImages = contentElement.querySelectorAll('img:not(.ne-hn)');
        regularImages.forEach(img => {
            if (img.src && !img.closest('ne-card')) {
                const altText = img.alt || '图片';
                let imgSrc = img.src;

                // 清理OSS处理参数
                if (imgSrc.includes('?x-oss-process=')) {
                    imgSrc = imgSrc.split('?x-oss-process=')[0];
                }

                const imgWrapper = document.createElement('div');
                imgWrapper.innerHTML = `![${altText}](${imgSrc})`;

                // 替换图片元素
                if (img.parentNode) {
                    img.parentNode.replaceChild(imgWrapper, img);
                }
            }
        });

        // 处理可能嵌套在其他容器中的图片
        const nestedImageContainers = contentElement.querySelectorAll('.ne-image-wrap');
        nestedImageContainers.forEach(container => {
            const img = container.querySelector('img');
            if (img && img.src && !container.closest('ne-card')) {
                const altText = img.alt || '图片';
                let imgSrc = img.src;

                // 清理OSS处理参数
                if (imgSrc.includes('?x-oss-process=')) {
                    imgSrc = imgSrc.split('?x-oss-process=')[0];
                }

                const imgWrapper = document.createElement('div');
                imgWrapper.innerHTML = `![${altText}](${imgSrc})`;

                // 替换整个容器
                const parentElement = container.closest('.ne-image-wrap') || container;
                if (parentElement.parentNode) {
                    parentElement.parentNode.replaceChild(imgWrapper, parentElement);
                }
            }
        });

        // 处理 board/mindmap 卡片（脑图/画板）- 获取预览图
        processBoardCards(contentElement);
    }

    // 处理 board/mindmap 卡片
    function processBoardCards(contentElement) {
        // 增加更多卡片类型：diagram(流程图), flowchart(流程图), sketch(草图), whiteboard(白板)
        const boardCards = contentElement.querySelectorAll(
            'ne-card[data-card-name="board"], ne-card[data-card-name="mindmap"], ne-card[data-card-name="diagram"], ne-card[data-card-name="flowchart"]'
        );

        boardCards.forEach((card, index) => {
            // 1. 尝试查找 img 元素
            let imgElement = card.querySelector('img');
            let imgSrc = null;

            if (imgElement && imgElement.src) {
                imgSrc = imgElement.src.split('?x-oss-process=')[0];
            }

            // 1.5 尝试从 canvas 元素获取
            const canvasElement = card.querySelector('canvas');

            // 1.6 尝试从 SVG 元素获取
            const svgElement = card.querySelector('svg');
            if (svgElement) {
                // 将 SVG 转换为 base64 编码的 data URL
                try {
                    const svgData = new XMLSerializer().serializeToString(svgElement);
                    // 将 SVG 内容转换为 base64
                    const svgBase64 = btoa(unescape(encodeURIComponent(svgData)));
                    const svgDataUrl = 'data:image/svg+xml;base64,' + svgBase64;
                    if (!imgSrc) {
                        imgSrc = svgDataUrl;
                    }
                } catch (e) {
                    // SVG 转换失败
                }
            }

            // 2. 尝试从 data-src 或 data-url 属性获取
            if (!imgSrc) {
                const possibleAttrs = ['data-src', 'data-url', 'data-image', 'data-preview', 'data-thumbnail'];
                for (const attr of possibleAttrs) {
                    if (card.dataset[attr]) {
                        imgSrc = card.dataset[attr].split('?x-oss-process=')[0];
                        break;
                    }
                }
            }

            // 3. 尝试从内部的 lake-board-reader 查找 canvas 的 data URL
            if (!imgSrc) {
                const canvasElement = card.querySelector('canvas');
                if (canvasElement) {
                    try {
                        imgSrc = canvasElement.toDataURL();
                    } catch (e) {
                        // 跨域限制，无法获取
                    }
                }
            }

            // 4. 尝试从页面全局状态获取
            if (!imgSrc) {
                const cardId = card.id;
                if (cardId && window.__INITIAL_STATE__) {
                    const cardData = window.__INITIAL_STATE__.cards?.[cardId];
                    if (cardData) {
                        const possibleFields = ['image', 'preview', 'thumbnail', 'url', 'src', 'cover', 'value'];
                        for (const field of possibleFields) {
                            if (cardData[field]) {
                                let src = typeof cardData[field] === 'object' ? cardData[field].image || cardData[field].url : cardData[field];
                                if (src) {
                                    imgSrc = src.split('?x-oss-process=')[0];
                                    break;
                                }
                            }
                        }
                    }
                }
            }

            // 创建占位符或图片元素
            const placeholder = document.createElement('div');

            if (imgSrc && imgSrc.startsWith('data:')) {
                placeholder.innerHTML = `![board](${imgSrc})`;
            } else if (imgSrc) {
                placeholder.innerHTML = `![board](${imgSrc})`;
            } else {
                placeholder.innerHTML = `\n> [!CAUTION] **脑图/画板内容**：请手动截图保存\n`;
            }

            // 替换原卡片
            if (card.parentNode) {
                card.parentNode.replaceChild(placeholder, card);
            }
        });
    }

    // 从页面中查找视频信息
    function findVideoInfoInPage(cardElement) {
        // 尝试从脚本标签中提取视频URL
        const scripts = document.querySelectorAll('script');
        for (let i = 0; i < scripts.length; i++) {
            const scriptContent = scripts[i].textContent;
            if (scriptContent && scriptContent.includes('videoUrl')) {
                const match = scriptContent.match(/"videoUrl":"([^"]+)"/);
                if (match && match[1]) {
                    return match[1].replace(/\\/g, '');
                }
            }
        }

        // 尝试从卡片的data属性中提取
        const cardId = cardElement.getAttribute('id');
        if (cardId) {
            const cardData = window.__INITIAL_STATE__?.cards?.[cardId];
            if (cardData && cardData.value && cardData.value.videoUrl) {
                return cardData.value.videoUrl;
            }
        }

        return null;
    }

    // 添加自定义规则
    function addCustomRules(turndownService) {
        // 处理表格
        turndownService.addRule('tables', {
            filter: 'table',
            replacement: function (content, node) {
                // 获取表格行
                const rows = node.querySelectorAll('tr');
                if (rows.length === 0) return '';

                // 处理表头
                const headerRow = rows[0];
                const headers = Array.from(headerRow.querySelectorAll('th')).map(th => {
                    return th.textContent.trim() || ' ';
                });

                // 如果没有表头，使用第一行作为表头
                if (headers.length === 0) {
                    const firstRowCells = Array.from(rows[0].querySelectorAll('td')).map(td => {
                        return td.textContent.trim() || ' ';
                    });
                    if (firstRowCells.length > 0) {
                        headers.push(...firstRowCells);
                    } else {
                        return ''; // 空表格
                    }
                }

                // 生成表头行
                let markdown = '| ' + headers.join(' | ') + ' |\n';

                // 生成分隔行
                markdown += '| ' + headers.map(() => '---').join(' | ') + ' |\n';

                // 处理数据行
                const startIndex = headers.length > 0 && rows[0].querySelectorAll('th').length > 0 ? 1 : 0;
                for (let i = startIndex; i < rows.length; i++) {
                    const cells = Array.from(rows[i].querySelectorAll('td')).map(td => {
                        return td.textContent.trim() || ' ';
                    });
                    if (cells.length > 0) {
                        // 确保单元格数量与表头一致
                        while (cells.length < headers.length) {
                            cells.push(' ');
                        }
                        markdown += '| ' + cells.join(' | ') + ' |\n';
                    }
                }

                return '\n' + markdown + '\n';
            }
        });

        // 处理语雀特殊标题
        turndownService.addRule('neHeadings', {
            filter: function (node) {
                return /^ne-h[1-6]$/.test(node.nodeName.toLowerCase());
            },
            replacement: function (content, node) {
                let level = parseInt(node.nodeName.toLowerCase().substring(4));
                return '\n' + '#'.repeat(level) + ' ' + content + '\n\n';
            }
        });

        // 处理图片
        turndownService.addRule('images', {
            filter: 'img',
            replacement: function (content, node) {
                const alt = node.alt || '';
                let src = node.getAttribute('src') || '';

                // 如果是base64图片，尝试获取原始URL
                if (src.startsWith('data:') && node.dataset.src) {
                    src = node.dataset.src;
                }

                // 清理OSS处理参数
                if (src.includes('?x-oss-process=')) {
                    src = src.split('?x-oss-process=')[0];
                }

                return `![${alt}](${src})`;
            }
        });

        // 处理视频 - 保留真实视频地址
        turndownService.addRule('videos', {
            filter: 'video',
            replacement: function (content, node) {
                const src = node.getAttribute('src') || '';
                if (src) {
                    return `<video src="${src}"></video>`;
                } else {
                    // 如果没有src属性，检查source子元素
                    const sourceEl = node.querySelector('source');
                    const sourceSrc = sourceEl ? sourceEl.getAttribute('src') : '';
                    if (sourceSrc) {
                        return `<video src="${sourceSrc}"></video>`;
                    }
                }
                return `<video src="视频地址无法获取"></video>`;
            }
        });

        // 保留HTML视频标签
        turndownService.keep(function (node) {
            return (
                node.nodeName === 'VIDEO' ||
                (node.nodeName === 'DIV' && node.innerHTML.includes('<video'))
            );
        });
    }

    // 后处理Markdown内容
    function postprocessMarkdown(markdown) {
        // 移除重复的空行
        markdown = markdown.replace(/\n{3,}/g, '\n\n');
        // 修复图片语法中的转义字符问题
        markdown = markdown.replace(/!\\\[(.*?)\\\]/g, '![$1]');

        // 确保图片链接格式正确
        markdown = markdown.replace(/!\[(.*?)\]\s*\((.*?)\)/g, '![$1]($2)');
        // 清理视频控制相关文本
        const controlTextsToRemove = [
            /\d+:\d+\/\d+:\d+/g,  // 时间格式如 0:00/0:42
            /倍速/g,
            /\d+\.\d+X/g,         // 如 1.5X
            /静音/g,
            /全屏/g,
            /播放/g,
            /暂停/g,
            /\d+%/g,             // 百分比值
            /自动播放/g
        ];

        controlTextsToRemove.forEach(regex => {
            markdown = markdown.replace(regex, '');
        });

        // 清理可能的空行
        markdown = markdown.replace(/\n\s*\n/g, '\n\n');

        // 修复视频标签格式，确保没有额外的div包裹
        markdown = markdown.replace(/<div><video src="(.*?)"><\/video><\/div>/g, '<video src="$1"></video>');

        // 修复可能的图片格式问题
        markdown = markdown.replace(/\!\[([^\]]*)\]\(([^)]+)\)/g, '![$1]($2)');

        // 移除可能的图片卡片标记
        markdown = markdown.replace(/\[image卡片内容\]/g, '');

        markdown = markdown.replace(/\\`\\`\\`/g, '```');
        return markdown;
    }

    // 将图片 URL 转换为 base64
    async function convertImageToBase64(imgUrl) {
        // 如果已经是 data URL，直接返回
        if (imgUrl.startsWith('data:')) {
            return imgUrl;
        }

        // 跳过 base64 开头的（已经是编码过的）
        if (imgUrl.startsWith('data:')) {
            return imgUrl;
        }

        try {
            // 尝试使用 fetch
            const response = await fetch(imgUrl);
            if (!response.ok) throw new Error('Fetch failed');
            const blob = await response.blob();
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = () => resolve(imgUrl); // 失败返回原 URL
                reader.readAsDataURL(blob);
            });
        } catch (e) {
            // fetch 失败，尝试使用 canvas
            try {
                return await convertImageToBase64WithCanvas(imgUrl);
            } catch (e2) {
                // 返回原始 URL
                return imgUrl;
            }
        }
    }

    // 使用 canvas 将图片转为 base64
    function convertImageToBase64WithCanvas(imgUrl) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                try {
                    const dataUrl = canvas.toDataURL('image/png');
                    resolve(dataUrl);
                } catch (e) {
                    reject(e);
                }
            };
            img.onerror = reject;
            img.src = imgUrl;
        });
    }

    // 处理 Markdown 中的所有图片为 base64 (保留旧函数兼容)
    async function processImagesToBase64(markdown) {
        const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
        const matches = [];
        let match;

        while ((match = imageRegex.exec(markdown)) !== null) {
            matches.push({
                full: match[0],
                alt: match[1],
                url: match[2],
                index: match.index
            });
        }

        if (matches.length > 0) {
            showLoadingMessage(`正在转换 ${matches.length} 张图片为 base64...`);
        }

        for (const m of matches) {
            if (!m.url.startsWith('data:')) {
                const base64 = await convertImageToBase64(m.url);
                markdown = markdown.replace(m.full, `![${m.alt}](${base64})`);
            }
        }

        return markdown;
    }

    // 处理 Markdown 中的图片，保存为单独文件
    async function processImagesToFiles(markdown, docTitle) {
        const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
        const matches = [];
        let match;

        while ((match = imageRegex.exec(markdown)) !== null) {
            matches.push({
                full: match[0],
                alt: match[1],
                url: match[2],
                index: match.index
            });
        }

        const files = [];
        const usedNames = {};

        if (matches.length > 0) {
            showLoadingMessage(`正在处理 ${matches.length} 张图片...`);
        }

        for (let i = 0; i < matches.length; i++) {
            const m = matches[i];

            if (m.url.startsWith('data:')) {
                // base64 图片，直接使用相对路径
                const ext = getBase64Extension(m.url);
                const fileName = getUniqueFileName(usedNames, i, ext);
                usedNames[fileName] = true;
                files.push({
                    path: `images/${fileName}`,
                    data: m.url
                });
                markdown = markdown.replace(m.full, `![${altText(m.alt)}](./images/${fileName})`);
            } else {
                // URL 图片
                const ext = await getImageExtension(m.url);
                const fileName = getUniqueFileName(usedNames, i, ext);
                usedNames[fileName] = true;

                // 获取图片数据
                const imageData = await fetchImageAsBase64(m.url);
                if (imageData) {
                    files.push({
                        path: `images/${fileName}`,
                        data: imageData
                    });
                    markdown = markdown.replace(m.full, `![${altText(m.alt)}](./images/${fileName})`);
                }
            }
        }

        return { markdown, files };
    }

    // 获取唯一的文件名
    function getUniqueFileName(usedNames, index, ext) {
        let fileName = `${index + 1}.${ext}`;
        let counter = 1;
        while (usedNames[fileName]) {
            fileName = `${index + 1}_${counter}.${ext}`;
            counter++;
        }
        return fileName;
    }

    // 获取 base64 图片的扩展名
    function getBase64Extension(base64Data) {
        if (base64Data.includes('image/png')) return 'png';
        if (base64Data.includes('image/gif')) return 'gif';
        if (base64Data.includes('image/webp')) return 'webp';
        if (base64Data.includes('image/jpeg') || base64Data.includes('image/jpg')) return 'jpg';
        return 'png';
    }

    // 获取图片 URL 的扩展名
    async function getImageExtension(url) {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            const contentType = response.headers.get('content-type');
            if (contentType) {
                if (contentType.includes('image/png')) return 'png';
                if (contentType.includes('image/gif')) return 'gif';
                if (contentType.includes('image/webp')) return 'webp';
                if (contentType.includes('image/jpeg')) return 'jpg';
            }
        } catch (e) {}

        // 从 URL 猜测扩展名
        const urlMatch = url.match(/\.(png|gif|webp|jpe?g)(\?|$)/i);
        if (urlMatch) return urlMatch[1];
        return 'png';
    }

    // 辅助函数：处理 alt 文本
    function altText(text) {
        return text || '图片';
    }

    // 获取图片数据（支持跨域）
    async function fetchImageAsBase64(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Fetch failed');
            const blob = await response.blob();
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = () => resolve(null);
                reader.readAsDataURL(blob);
            });
        } catch (e) {
            console.warn('无法下载图片:', url, e);
            return null;
        }
    }

    // 下载 ZIP 文件
    function downloadZip(result, docTitle) {
        const zip = new JSZip();

        // 添加 Markdown 文件
        zip.file(`${docTitle}.md`, result.markdown);

        // 添加 images 文件夹
        const imgFolder = zip.folder('images');

        // 添加所有图片
        result.files.forEach(file => {
            const data = file.data.startsWith('data:')
                ? file.data.split(',')[1]
                : file.data.split(',')[1];
            imgFolder.file(file.path.replace('images/', ''), data, { base64: true });
        });

        // 生成 ZIP 并下载
        zip.generateAsync({ type: 'blob' }).then(function(content) {
            const fileName = `${docTitle}.zip`;
            saveAs(content, fileName);
        });
    }

    // 显示加载提示
    function showLoadingMessage(message) {
        // 移除可能已存在的加载提示
        hideLoadingMessage();

        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'yuque-md-export-loading';
        loadingDiv.style.position = 'fixed';
        loadingDiv.style.top = '50%';
        loadingDiv.style.left = '50%';
        loadingDiv.style.transform = 'translate(-50%, -50%)';
        loadingDiv.style.color = 'white';
        loadingDiv.style.padding = '20px 30px';
        loadingDiv.style.borderRadius = '12px';
        loadingDiv.style.zIndex = '10000';
        loadingDiv.style.display = 'flex';
        loadingDiv.style.alignItems = 'center';
        loadingDiv.style.gap = '12px';

        const spinner = document.createElement('div');
        spinner.style.width = '24px';
        spinner.style.height = '24px';
        spinner.style.borderRadius = '50%';
        spinner.style.border = '3px solid rgba(255, 255, 255, 0.3)';
        spinner.style.borderTopColor = 'white';
        spinner.style.animation = 'yuque-md-spin 1s linear infinite';

        const style = document.createElement('style');
        style.textContent = `
            @keyframes yuque-md-spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;

        document.head.appendChild(style);
        loadingDiv.appendChild(spinner);

        const messageEl = document.createElement('div');
        messageEl.textContent = message;
        messageEl.style.fontSize = '16px';
        loadingDiv.appendChild(messageEl);

        document.body.appendChild(loadingDiv);
    }

    // 隐藏加载提示
    function hideLoadingMessage() {
        const loadingDiv = document.getElementById('yuque-md-export-loading');
        if (loadingDiv) {
            loadingDiv.remove();
        }
    }

    // 下载Markdown文件
    function downloadMarkdown(content, filename) {
        const blob = new Blob([content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // 添加样式
    addStyles();

    // 页面加载完成后添加导出按钮
    window.addEventListener('load', function () {
        // 等待一段时间确保语雀的内容完全加载，增加到 4000ms
        setTimeout(addExportButton, 4000);
    });

    // 监听URL变化，在页面切换时重新添加按钮
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            setTimeout(addExportButton, 4000);
        }
    }).observe(document, { subtree: true, childList: true });

    // 初始运行，增加到 4000ms
    setTimeout(addExportButton, 4000);
})();
