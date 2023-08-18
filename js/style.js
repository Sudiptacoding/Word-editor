const textarea = document.querySelector('#editor');
function fun1() {
    const bold = document.querySelector('#bold')
    textarea.classList.toggle('font-bold')
    bold.classList.toggle('text-blue-700')
    textarea.classList.remove('font-normal')
}
function fun2() {
    const bold = document.querySelector('#under')
    textarea.classList.toggle('underline')
    bold.classList.toggle('text-blue-700')
    textarea.classList.remove('no-underline')
}
function fun3() {
    const bold = document.querySelector('#italy')
    textarea.classList.toggle('italic')
    bold.classList.toggle('text-blue-700')
    textarea.classList.remove('not-italic')
}
function fun4() {
    const bold = document.querySelector('#right')
    textarea.classList.add('text-left')
    bold.classList.toggle('text-blue-700')

    textarea.classList.remove('text-center')
    textarea.classList.remove('text-justify')
    textarea.classList.remove('text-right')

    document.querySelector('#center').classList.remove('text-blue-700')
    document.querySelector('#space').classList.remove('text-blue-700')
    document.querySelector('#left').classList.remove('text-blue-700')
}
function fun5() {
    const bold = document.querySelector('#center')
    textarea.classList.add('text-center')
    bold.classList.toggle('text-blue-700')

    textarea.classList.remove('text-left')
    textarea.classList.remove('text-justify')
    textarea.classList.remove('text-right')

    document.querySelector('#right').classList.remove('text-blue-700')
    document.querySelector('#space').classList.remove('text-blue-700')
    document.querySelector('#left').classList.remove('text-blue-700')
}
function fun6() {
    const bold = document.querySelector('#space')
    textarea.classList.add('text-justify')
    bold.classList.toggle('text-blue-700')

    textarea.classList.remove('text-left')
    textarea.classList.remove('text-center')
    textarea.classList.remove('text-right')

    document.querySelector('#right').classList.remove('text-blue-700')
    document.querySelector('#center').classList.remove('text-blue-700')
    document.querySelector('#left').classList.remove('text-blue-700')
}
function fun7() {
    const bold = document.querySelector('#left')
    textarea.classList.add('text-right')
    bold.classList.toggle('text-blue-700')

    textarea.classList.remove('text-left')
    textarea.classList.remove('text-center')
    textarea.classList.remove('text-justify')

    document.querySelector('#right').classList.remove('text-blue-700')
    document.querySelector('#center').classList.remove('text-blue-700')
    document.querySelector('#space').classList.remove('text-blue-700')
}
function fun8() {
    const bold = document.querySelector('#upper')
    textarea.classList.add('uppercase')
    bold.classList.toggle('text-blue-700')

    textarea.classList.remove('lowercase')
    textarea.classList.remove('capitalize')

    document.querySelector('#lower').classList.remove('text-blue-700')
    document.querySelector('#normal').classList.remove('text-blue-700')

}
function fun9() {
    const bold = document.querySelector('#lower')
    textarea.classList.add('lowercase')
    bold.classList.toggle('text-blue-700')

    textarea.classList.remove('uppercase')
    textarea.classList.remove('capitalize')


    document.querySelector('#upper').classList.remove('text-blue-700')
    document.querySelector('#normal').classList.remove('text-blue-700')
}
function fun10() {
    const bold = document.querySelector('#normal')
    textarea.classList.add('capitalize')
    bold.classList.toggle('text-blue-700')

    textarea.classList.remove('uppercase')
    textarea.classList.remove('lowercase')

    document.querySelector('#upper').classList.remove('text-blue-700')
    document.querySelector('#lower').classList.remove('text-blue-700')
}

function handelFont(e) {
    textarea.classList.add(`font-[${e.value}]`);
}
function handelSize(event) {
    textarea.setAttribute('style', `font-size:${event.value}px`)
}

function handelColorPicker(e) {
    textarea.classList.add(`text-[${e.value}]`)
    textarea.classList.remove('text-gray-800')
}

function handelMoodChange(mood) {
    if (mood === 'dark') {
        textarea.classList.add('bg-[#1e293b]')
        textarea.classList.remove('bg-white')
        textarea.classList.add('text-white')
        document.querySelector('#dark').classList.add('text-[#1e40af]')
        document.querySelector('#sun').classList.remove('text-[#eab308]')
    } else {
        textarea.classList.add('bg-white')
        textarea.classList.remove('bg-[#1e293b]')
        textarea.classList.remove('text-white')
        textarea.classList.add('text-gray-800')
        document.querySelector('#sun').classList.add('text-[#eab308]')
        document.querySelector('#dark').classList.remove('text-[#1e40af]')
    }
}