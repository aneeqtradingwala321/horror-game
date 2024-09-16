const story = {
    start: {
        text: "You arrive at an old, abandoned mansion on a stormy night. The door creaks open... What do you do?",
        choices: [
            { text: "Enter the mansion", next: "hallway" },
            { text: "Run back to the woods", next: "woods" },
            { text: "Call for help", next: "phone" },
            { text: "Look through a window", next: "window" }
        ]
    },
    hallway: {
        text: "You step into the dark hallway. A strange noise comes from upstairs. What do you do?",
        choices: [
            { text: "Go upstairs", next: "upstairs" },
            { text: "Explore the kitchen", next: "kitchen" },
            { text: "Leave the mansion", next: "leave" },
            { text: "Call out", next: "callOut" }
        ]
    },
    woods: {
        text: "You run back into the woods, but something seems to be following you. What do you do?",
        choices: [
            { text: "Hide behind a tree", next: "hideTree" },
            { text: "Keep running", next: "run" },
            { text: "Return to the mansion", next: "hallway" },
            { text: "Scream for help", next: "scream" }
        ]
    },
    // Continue expanding different branches here...

    // Example of an ending
    ending1: {
        text: "You reach the top of the stairs, but the floor gives way beneath you. You fall to your doom. THE END.",
        choices: []
    },

    // Another example ending
    ending2: {
        text: "You run through the woods, but something catches you. You feel cold hands around your neck. THE END.",
        choices: []
    }
};

function showStory(part) {
    const storyText = document.getElementById('story-text');
    const choicesDiv = document.getElementById('choices');

    storyText.textContent = story[part].text;
    choicesDiv.innerHTML = '';

    story[part].choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => showStory(choice.next));
        choicesDiv.appendChild(button);
    });

    if (story[part].choices.length === 0) {
        const restartButton = document.createElement('button');
        restartButton.textContent = "Restart";
        restartButton.addEventListener('click', () => showStory('start'));
        choicesDiv.appendChild(restartButton);
    }
}

showStory('start');
