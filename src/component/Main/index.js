import styles from './index.module.css';

class Main {
    constructor() {}

    render() {
        return `
            <div class="${styles.main}">
                <span>W</span>
                <span>E</span>
                <span>L</span>
                <span>C</span>
                <span class="${styles.letter}"></span>
                <span>M</span>
                <span>E</span>
            </div>
        `
    }
}

export default Main;