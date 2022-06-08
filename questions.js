const questions = async() => {
    const answers = await inquirer.prompt[{
        type: 'list',
        name: 'scheduleWeek',
        message: 'What would you like to do?',
        choices: ["Create a new Weekly Schedule", "Edit my weekly Schedule", "Display my current schedule", "Delete my current schedule", "Quit"]
    }]
    console.log(answers)

    if (answers.scheduleWeek === scheduleWeek.choices[0]) {
        createPrompt();
    } else if (answers.scheduleWeek === scheduleWeek.choices[1]) {
        editPrompt();
    } else if (answers.scheduleWeek === scheduleWeek.choices[2]) {
        showPrompt();
    } else if (answers.scheduleWeek === scheduleWeek.choices[3]) {
        deletePrompt();
    } else {
        return;
    }

    const createPrompt = async() => {
        const answers1 = await inquirer.prompt[{
            type: 'input',
            name: 'Monday-Events',
            message: 'What events will take place on Monday?',
            default: ''
        }, {
            type: 'input',
            name: 'Monday-Tasks',
            message: 'What tasks must be performed on Monday?',
            default: ''
        }, {
            type: 'input',
            name: 'Tuesday-Events',
            message: 'What events will take place on Tuesday?',
            default: ''
        }, {
            type: 'input',
            name: 'Tuesday-Tasks',
            message: 'What tasks must be performed on Tuesday?',
            default: ''
        }, {
            type: 'input',
            name: 'Wednesday-Events',
            message: 'What events will take place on Wednesday?',
            default: ''
        }, {
            type: 'input',
            name: 'Wednesday-Tasks',
            message: 'What tasks must be performed on Wednesday?',
            default: ''
        }, {
            type: 'input',
            name: 'Thursday-Events',
            message: 'What events will take place on Thursday?',
            default: ''
        }, {
            type: 'input',
            name: 'Thursday-Tasks',
            message: 'What tasks must be performed on Thursday?',
            default: ''
        }, {
            type: 'input',
            name: 'Friday-Events',
            message: 'What events will take place on Friday?',
            default: ''
        }, {
            type: 'input',
            name: 'Friday-Tasks',
            message: 'What tasks must be performed on Friday?',
            default: ''
        }, {
            type: 'input',
            name: 'Saturday-Events',
            message: 'What events will take place on Saturday?',
            default: ''
        }, {
            type: 'input',
            name: 'Saturday-Tasks',
            message: 'What tasks must be performed on Saturday?',
            default: ''
        }, {
            type: 'input',
            name: 'Sunday-Events',
            message: 'What events will take place on Sunday?',
            default: ''
        }, {
            type: 'input',
            name: 'Sunday-Tasks',
            message: 'What tasks must be performed on Sunday?',
            default: ''
        }]
        console.log(answers1)
        createWeek(answers1)
    }

    editPrompt = async() => {
        console.log("Edit Prompt Ran")
    }

    showPrompt = async() => {
        console.log("Show Prompt Ran")
    }

    deletePrompt = async() => {
        console.log("Delete Prompt Ran")
    }
}

module.exports = questions