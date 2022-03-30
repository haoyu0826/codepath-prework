# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Haoyu Yang**

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/shrouded-helix-trouser?path=script.js%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Shows an image when click the start button
- [x] changed background color during the game

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/JHu6Yim.gif)
![](https://i.imgur.com/Qods3BJ.gif)
![](https://i.imgur.com/sskPeyi.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    喵不嗷, 《【js写一个计时器】js小白写一个计时器实现大部分功能 可暂停可复位-喵不嗷的JavaScript》, https://www.bilibili.com/video/BV1uJ411F7XU?spm_id_from=333.337.search-card.all.click

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    Though I have some experience of HTML5, CSS3, and JavaScript before, I did think much in this challenging project. Before, I have only been working with some projects to create the website, and this is the first time that I work on an interative game by Javascipt. I have encountered many difficulties: for instance, it is not easy for me initially to understand some JavaScript codes given in the tutorial. I did spend much time there to understand how every sound works and how we build the mechanism to know if the user is right or wrong. I spent much time on setting a timer in JavaScript (how to make it stop, how to make it restart, and how to count backwards), learning from online videos. Overall, prework is such a precious experience for me to get deeper into software and I will definitely cherish it.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
In this project, I learned to create a cute game based on the website(there is an URL that links to our assignment). In real life, we have played some games that even are not required to be connected to the Internet（single-player game）. How it comes true? Is it similarly created by HTML, CSS and JavaScript? Additionally, I have learned that many games are monitored by Java/C++ in backstage. How Java/C++ are connected to the UI? I am looking forward to learning it more in the future!

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I am pretty looking forward to adding a new function called "play_a_song" in this project. I have revised the tone of my eight buttons in which "do-re-mi-fa-so-la-ti-do" can be played respectively. Therefore, music can be created simply by clicking on these buttons(connecting different notes). In "play_a_song", we can randomly give a song to user from the music library as well as showing them which buttons are pressed to compose the song. The user can try to follow these buttons so that they can actually experience like the pianists in this project!



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Haoyu Yang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
