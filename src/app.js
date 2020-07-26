class ChooseForMe extends React.Component {
    render() {
        const title = "Choose For Me";
        const subtitle = "Let me decide for you";
        const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <Option />
                <AddOption />
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )

    }
};

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
};

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Here are your options</p>
                {this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
};

class Option extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.optionText}
                </ol>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form action="">
                    Agregar opcion:
                <input type="text" />
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<ChooseForMe />, document.getElementById('app')); 