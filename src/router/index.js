class HashRouter {
    constructor(options) {
        this.routes = [];
        this.root = '';
        this.view = '';
        if (options && options.root && options.view) {
            this.root = options.root;
            this.view = options.view;
        } else {
            throw Error('root, view is need for instantiating')
        }
        window.onpopstate = () => { this._changeComponent() }
    }

    add(path, component) {
        if (typeof path !== 'string' || path === '') {
            throw Error('path must be string and could not be empty');
        }
        this.routes.push({ path: this._clearEndSlashes(window.location.pathname) + path, component });
        return this;
    }

    get currentRoute() {
        const match = window.location.href.match(/#(.*)$/);
        const path = match ? match[1] : '';
        return path
    }

    _clearEndSlashes(path) {
        if (typeof path !== 'string') {
            throw new Error(`parameter 'path' must be string type`);
        }
        return path.replace(/\/$/, '');
    }

    _changeView(Component) {
        const viewElem = document.querySelector(this.view);
        const componentHTML = new Component().render();
        viewElem.innerHTML = componentHTML;
    }

    _changeComponent() {
        const nextRoute = this.routes.find((route) => this.currentRoute === route.path);
        this._changeView(nextRoute.component);
    }
}

export default HashRouter;