export interface test {
    title: string,
    questions: questions,
}

interface questions {
    questions: [
        question_one: string,
        question_second: string,
        question_third?: string,
        question_four?: string
    ]
}