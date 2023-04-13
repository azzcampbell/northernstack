class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <a href="https://www.northernstack.co.uk">
        <img class="logo" src="images/logo.svg" alt="logo">
        </a>
        <nav>
            <ul class="nav_links">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="https://azzcampbell.github.io/blog">Blog</a></li>
            </ul>
        </nav>
        <a class="cta" href="#"><button>Contact</button></a>
    </header>
    `
    }
}

class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="footer">
            <p>Made with <span class="red">❤</span> by Northern Stack 2022&copy</p>
        </div>
    </footer>
    `
    }
}

customElements.define('my-header', myHeader)
customElements.define('my-footer', myFooter)