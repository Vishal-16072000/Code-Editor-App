let lightTheme = document.querySelector("#Light");
        const textArea = document.querySelectorAll('.textArea');
        const rightPartTheme = document.querySelector('.rightPart');

        lightTheme.addEventListener('click', () => {
            console.log('click light');
            textArea.forEach((el) => {
                el.classList.remove('darkTheme');
                el.classList.add('lightTheme');
            })
            rightPartTheme.classList.remove('darkThemeOutput');
            rightPartTheme.classList.add('lightThemeOutput');
        });

        let darkTheme = document.querySelector("#Dark");
        darkTheme.addEventListener('click', () => {
            console.log('click dark');
            textArea.forEach((el) => {
                el.classList.remove('lightTheme');
                el.classList.add('darkTheme');
            })
            rightPartTheme.classList.remove('lightThemeOutput');
            rightPartTheme.classList.add('darkThemeOutput');
        });

        let output = document.querySelector('#output');
        // output.contentDocument.body.innerHTML = "<h1>Welcome</h1>";
        // output.contentDocument.head.innerHTML = "<style>h1{color:red;}</style>";
        // output.contentWindow.eval(alert("You are using Code Editor"));

        let allInput = document.querySelectorAll('.leftPart textarea');
        let runbtn = document.querySelector('.runBtn');
        let HtmlCode, CssCode, JsCode = '';

        allInput.forEach((el, idx) => {
            runbtn.addEventListener('click', () => {
                if(idx == 0){
                    HtmlCode = el.value;
                }

                if(idx == 1){
                    CssCode = el.value;
                }
                
                if(idx == 2){
                    JsCode = el.value;
                }

                output.contentDocument.body.innerHTML = HtmlCode;
                output.contentDocument.head.innerHTML = `<style>${CssCode}</style>`;
                output.contentWindow.eval(JsCode);
            })
        })

        let resetBtnHtml = document.querySelector(".reset-btn-html");
        let resetBtnCss = document.querySelector(".reset-btn-css");
        let resetBtnJs = document.querySelector(".reset-btn-js");
        let resetBtn = document.querySelector(".resetBtn");
        
        resetBtnHtml.addEventListener('click', () => {
            if(allInput[0].value!==''){
            const res = confirm('Do you want to reset Html Code ?');
            if(res){
                allInput[0].value = '';
            } else {
                return;
            }
        }
    })
    

        resetBtnCss.addEventListener('click', () => {
            if(allInput[1].value!==''){
            const res = confirm('Do you want to reset CSS Code ?');
            if(res){
                allInput[1].value = '';
            } else {
                return;
            }
        }
        })

        resetBtnJs.addEventListener('click', () => {
            if(allInput[2].value!==''){
            const res = confirm('Do you want to reset JavaScript Code ?');
            if(res){
                allInput[2].value = '';
            } else {
                return;
            }
        }
        })

        resetBtn.addEventListener('click', () => {
            if(allInput[0].value!=='' || allInput[1].value!=='' || allInput[2].value!==''){
            const res = confirm('Are you sure, You want to delete whole code ?');
            if(res){
                allInput[0].value = '';
                allInput[1].value = '';
                allInput[2].value = '';
            } else {
                return;
            }
        }
        })
