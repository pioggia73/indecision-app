//const appRoot = document.getElementById('app');

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                    <button onClick={this.handleToggleVisibility}>
                        {this.state.visibility ? 'Hide details' : 'Show details'}
                    </button>
                        {this.state.visibility && (<div><p>Hey, These are some details you can now see</p></div>)}
            </div>
        )
    }      
};

// let visibility = false

// const toggleVisibility = () => {
//     visibility = !visibility
//     renderVisibleToggle()
// }

// const renderVisibleToggle = () => {

//     const template = (

//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey, These are some details you can now see</p>
//                 </div>
//             )}
//         </div>
//     )

//     ReactDOM.render(template, appRoot);
// };


// renderVisibleToggle()

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));