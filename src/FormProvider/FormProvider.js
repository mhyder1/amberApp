class FormProvider extends Component {
    state = {
        ideaName: '',
        ideaSummary:'' ,
        authorName: '',
        contactInfo: ''
    }

    render() {
        return (
            <FormContext.Provider value = {{
                state: this.state
            }}>
                {this.props.children}
            </FormContext.Provider>
        )
    }
}
export default FormProvider