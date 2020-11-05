import styles from './App.module.css';

class App {
    constructor() {

    }

    render() {
        return `
            <!-- navigation link -->
            <ul class="${styles['navigation-bar']}">
                <li>
                    <a href="/#/">Main</a>
                </li>
                <li>
                    <a href="/#/one">One</a>
                </li>
                <li>
                    <a href="/#/two">Two</a>
                </li>
                <li>
                    <a href="/#/three">Three</a>
                </li>
            </ul>
            <!-- route outlet -->
            <div id="route-view">

            </div>
        `
    }
}

export default App;