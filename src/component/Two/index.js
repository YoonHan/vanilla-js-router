import styles from './index.module.css';

class One {
    constructor() {

    }

    render() {
        return `
            <div class="${styles['ripple-background']}">
                <div class="${styles.circle} ${styles.xxlarge} ${styles.shade1}"></div>
                <div class="${styles.circle} ${styles.xlarge} ${styles.shade2}"></div>
                <div class="${styles.circle} ${styles.large} ${styles.shade3}"></div>
                <div class="${styles.circle} ${styles.midium} ${styles.shade4}"></div>
                <div class="${styles.circle} ${styles.small} ${styles.shade5}"></div>
            </div>
        `
    }
}

export default One;