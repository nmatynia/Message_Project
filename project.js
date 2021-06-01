

const takeRandomArray = (array,num)=> {
    for(let i =0 ; i < num ; i++){
        let sentence = array[Math.floor(Math.random()*array.length)]
        console.log(sentence)
    }
}


let messages = ["The sun was warm.",
"When she opened her eyes the sun was directly overhead.",
"The evening sun made eerie shapes in the forested landscape",
"When she woke again, the sun was shining on her face.",
"The white sand reflected the hot sun back at them until they were dripping with perspiration.",
"The sun is but a morning star.",
"The sun will be up soon.",
"They would not awake until the sun had smiled lovingly upon them.",
"She selected an off-the-shoulder lilac colored sun dress that Alex liked.",
"They'd been there what felt like a day, and yet the sun was in the same position as when they'd been thrown into the world.",
"Oh, the delight with which I gathered up the fruit in my pinafore, pressed my face against the smooth cheeks of the apples, still warm from the sun, and skipped back to the house!",
"The sun was directly overhead."
]

takeRandomArray(messages,3)