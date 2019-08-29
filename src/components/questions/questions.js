customElements.define('zip-questions', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.
        this._shadowRoot = this.attachShadow({ mode: 'closed' });
        this._shadowRoot.innerHTML =
            `<style>
                .zip-questions{
                    background: white;
                    width: 600px;
                    margin:-50px auto 0;
                    padding: 40px;
                    border-radius: 5px;
                }
                .zip-questions ul{
                    margin:0;
                    padding:0;
                    list-style:none;
                }
                .zip-questions ul li{
                    display:none;
                }
                .zip-questions ul li p{
                    font-size: 18px;
                }
                h2{
                    margin:0 0 20px 0;
                }
                label{
                    display:block;
                    margin: 0 0 10px;
                    cursor:pointer;
                }
                input{
                    margin:0 10px 0 0;
                }
                textarea{
                    width: 100%;
                }
                button {
                    background: #42226b;
                    width: 150px;
                    height:50px;
                    color:white;
                    font-weight:bold;
                    font-size: 15px;
                    border-radius: 30px;
                    cursor:pointer;
                    margin: 20px 0 0;
                    box-shadow: 0 0px 0px 5px rgba(66, 34, 107, 0.3);
                    border:none;
                    outline:none;
                    transition: all 1s ease;
                }
                button:hover{
                    background: #0d021b;
                }
                button:disabled{
                    cursor: not-allowed;
                    opacity: 0.5;
                }
                button:disabled:hover{
                   background: #42226b;
                }
                .zip-questions ul li span{
                    display:none;
                }
                .zip-questions ul li span.show-value-three-text,
                .zip-questions ul li span.show-value-fourth-text,
                .zip-questions ul li span.show-value-five-text{
                    display:inline-block;
                }
                .show-value-two-mark, 
                .show-value-three-mark,
                .show-value-fourth-mark,
                .show-value-five-mark{
                    color: green;
                }
                .show-value-one{
                    background: yellow;
                }
                .zip-questions ul.rest li{
                    background:#ececec;
                    padding: 20px; 
                    display:flex;
                    align-items:center;
                    border: 6px solid #cecece;
                    margin: 0 0 20px;
                }
                .zip-questions ul.rest li img{
                    height: 100px;
                    max-width: 100%;
                    width: 200px;
                    object-fit: cover;
                }
                .zip-questions ul.rest li span{
                    display:block;
                    margin-left: 30px;
                }
            </style>
            <div class="zip-questions">
                <ul id="list">
                    <li style="display:block;" class="first-box">
                        <h2>How do you describe yourself as a developer?</h2>
                        <label class="label1"><input type="radio" name="developer" value="Hermit">Hermit</label>
                        <label class="label1"><input type="radio" name="developer" value="Sociable">Sociable</label>
                        <label class="label1"><input type="radio" name="developer" value="Serious">Serious</label>
                        <label class="label1"><input type="radio" name="developer" value="Grumpy">Grumpy</label>
                        <label class="label1"><input type="radio" name="developer" value="Do not know yet">Do not know yet</label>
                    </li>
                    <li class="second-box">
                        <h2>Select the JavaScript based technologies:</h2>
                        <label><input type="checkbox" name="technologies[]" value="AngularJS" />AngularJS</label>
                        <label><input type="checkbox" name="technologies[]" value="Ember" />Ember</label>
                        <label><input type="checkbox" name="technologies[]" value="VueJS" />VueJS</label>
                        <label><input type="checkbox" name="technologies[]" value="Java" />Java</label>
                        <label><input type="checkbox" name="technologies[]" value="C#" />C#</label>
                    </li>
                    <li class="third-box">
                        <h2>Introduce  a palindrome</h2>
                        <textarea name="textarea" rows="10" cols="50"></textarea>
                    </li>
                    <li class="fourth-box">
                        <h2>Write a sentence</h2>
                        <textarea name="textarea" rows="10" cols="50" class="textarea-first"></textarea>
                    <div class="sentence-second" style="display:none;">
                            <h2>Write same sentence in reverse</h2>
                            <textarea name="textarea" rows="10" cols="50" class="textarea-second"></textarea>
                    </div>
                    </li>
                    <li class="five-box">
                        <p class="show-value-one"></p>
                        <p>
                            <span class="show-value-two-mark">&#10004;</span>
                            <span class="show-value-two-bad">&#x274C;</span>
                        </p>
                        <p>
                            <span class="show-value-three-text"></span>
                            <span class="show-value-three-mark">&#10004;</span>
                            <span class="show-value-three-bad">&#x274C;</span>
                        </p>
                        <p>
                            <span class="show-value-fourth-text"></span>
                            <span class="show-value-fourth-mark">&#10004;</span>
                            <span class="show-value-fourth-bad">&#x274C;</span>
                        </p>
                        <p>
                            <span class="show-value-five-text"></span>
                            <span class="show-value-five-mark">&#10004;</span>
                            <span class="show-value-five-bad">&#x274C;</span>
                        </p>
                    </li>
                </ul>
                <button name="button" class="button" disabled>Next</button>
                <div class="restaurants" style="display:none;">
                    <h2>Select your favorite San Diego restaurant</h2>
                    <ul class="rest"></ul>
                </div>
            </div>`;

        const button = this._shadowRoot.querySelector("button");

        const showValueOne = this._shadowRoot.querySelector('.show-value-one');

        const showValueTwoMark = this._shadowRoot.querySelector('.show-value-two-mark');
        const showValueTwoBad = this._shadowRoot.querySelector('.show-value-two-bad');

        const showValueThree = this._shadowRoot.querySelector('.show-value-three-text');
        const showValueThreeMark = this._shadowRoot.querySelector('.show-value-three-mark');
        const showValueThreeBad = this._shadowRoot.querySelector('.show-value-three-bad');

        const showValueFourth = this._shadowRoot.querySelector('.show-value-fourth-text');
        const showValueFourthMark = this._shadowRoot.querySelector('.show-value-fourth-mark');
        const showValueFourthBad = this._shadowRoot.querySelector('.show-value-fourth-bad');

        const showValueFive = this._shadowRoot.querySelector('.show-value-five-text');
        const showValueFiveMark = this._shadowRoot.querySelector('.show-value-five-mark');
        const showValueFiveBad = this._shadowRoot.querySelector('.show-value-five-bad');

        const restaurants = this._shadowRoot.querySelector(".restaurants");

        button.addEventListener('click', e => {
            button.disabled = true;
            restaurants.style.display = 'none';
            let firstBox = this._shadowRoot.querySelector('.first-box'),
                secondBox = this._shadowRoot.querySelector('.second-box'),
                thirdBox = this._shadowRoot.querySelector('.third-box'),
                fourthBox = this._shadowRoot.querySelector('.fourth-box'),
                fiveBox = this._shadowRoot.querySelector('.five-box');
            if (firstBox.style.display === 'block') {
                firstBox.style.display = 'none';
                secondBox.style.display = 'block';
            }
            else if (secondBox.style.display === 'block') {
                secondBox.style.display = 'none';
                thirdBox.style.display = 'block';
            }
            else if (thirdBox.style.display === 'block') {
                thirdBox.style.display = 'none';
                fourthBox.style.display = 'block';
            }
            else if (fourthBox.style.display === 'block') {
                fourthBox.style.display = 'none';
                fiveBox.style.display = 'block';
                button.style.display = 'none';
                restaurants.style.display = 'block';
            }
        });

        this._shadowRoot.querySelectorAll("li.first-box > label >input").forEach(input => {
            input.addEventListener('click', function () {
                showValueOne.innerHTML = this.value;
                button.disabled = false;
            });
        });

        Array.from(document.querySelectorAll('input[type="checkbox"]')).filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
        const array = []
        this._shadowRoot.querySelectorAll("li.second-box > label >input").forEach((input, i) => {
            input.addEventListener('click', function () {
                array.push(input.value);
                if (array.indexOf("Java") > -1 || array.indexOf("C#") > -1) {
                    showValueTwoBad.style.display = 'block';
                    showValueTwoMark.style.display = 'none';
                }
                else {
                    showValueTwoBad.style.display = 'none';
                    showValueTwoMark.style.display = 'block';
                }
                button.disabled = false;
            });
        });

        const palindrome = this._shadowRoot.querySelector("li.third-box textarea");
        palindrome.addEventListener('input', palindromeText);
        function palindromeText() {
            let text = this.value;
            if (text !== '') { button.disabled = false; }
            else { button.disabled = true; }


            var re = /[\W_]/g;
            var lowRegStr = text.toLowerCase().replace(re, '');
            var reverseStr = lowRegStr.split('').reverse().join('');
            showValueThree.innerHTML = text;
            if (reverseStr === lowRegStr) {
                showValueThreeMark.style.display = 'inline-block';
                showValueFourthBad.style.display = 'none';
            }
            else {
                showValueThreeMark.style.display = 'none';
                showValueThreeBad.style.display = 'inline-block';
            }
        }

        const sentence = this._shadowRoot.querySelector("li.fourth-box .textarea-first");
        const sentenceTwo = this._shadowRoot.querySelector("li.fourth-box .textarea-second");
        const divSentenceTwo = this._shadowRoot.querySelector("li.fourth-box .sentence-second");

        sentence.addEventListener('input', sentenceOne);
        sentenceTwo.addEventListener('input', sentenceOne);

        function sentenceOne() {
            let sentence1 = sentence.value;
            let sentence2 = sentenceTwo.value;

            var re = /[\W_]/g;
            var lowRegStr1 = sentence1.toLowerCase().replace(re, '');
            var reverseStr1 = lowRegStr1.split('').reverse().join('');

            var lowRegStr2 = sentence2.toLowerCase().replace(re, '');
            var reverseStr2 = lowRegStr2.split('').reverse().join('');

            showValueFourth.innerHTML = sentence.value;
            showValueFive.innerHTML = sentenceTwo.value;

            if (reverseStr1 === lowRegStr1) {
                showValueFourthMark.style.display = 'inline-block';
                showValueFourthBad.style.display = 'none';
            }
            else {
                showValueFourthMark.style.display = 'none';
                showValueFourthBad.style.display = 'inline-block';
            }

            if (reverseStr2 === lowRegStr2) {
                showValueFiveMark.style.display = 'inline-block';
                showValueFiveBad.style.display = 'none';
            }
            else {
                showValueFiveMark.style.display = 'none';
                showValueFiveBad.style.display = 'inline-block';
            }


            if (sentence1 !== '') {
                divSentenceTwo.style.display = 'block';
                if (sentence1 !== '' && sentence2 !== '') {
                    button.disabled = false;
                }
                else {
                    button.disabled = true;
                }
            }
            else {
                divSentenceTwo.style.display = 'none';
                button.disabled = true;
            }
        }

        // Include data for accessing Google APIs
        const apiKey = '6a3d1c081e6cdae38d5e1144cbc59363';
        const ul = this._shadowRoot.querySelector('.rest');
        const url = 'https://developers.zomato.com/api/v2.1/collections?city_id=302&apikey=6a3d1c081e6cdae38d5e1144cbc59363';

        function createNode(element) {
            return document.createElement(element); // Create the type of element you pass in the parameters
        }

        function append(parent, el) {
            return parent.appendChild(el); // Append the second parameter(element) to the first one
        }
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(function (data) {
                let rest = data.collections; // Get the results
                console.log(data.collections)
                return rest.map(function (item) { // Map through the results and for each run the code below
                    let li = createNode('li'), //  Create the elements we need
                        img = createNode('img'),
                        span = createNode('span');

                    img.src = item.collection.image_url;  // Add the source of the image to be the src of the img element
                    span.innerHTML = `${item.collection.title}`;
                    li.append(img)
                    li.append(span)
                    ul.append(li)
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    connectedCallback() {
        // When creating closed shadow trees, you'll need to stash the shadow root
        // for later if you want to use it again. Kinda pointless.
        const questions = this._shadowRoot.querySelector('.zip-questions');
    }
});
