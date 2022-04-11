import React, {Component} from 'react'

class CommentFilter extends Component {
    state = {
        comment: this.props.comment.split(' '),
        insults: ['바보', '똥개', '그지', '임마', '새끼', '죽을']
    }
    filterComment = () => {
        const { insults } = this.state

        for(let insult of insults) {
            this.setState({comment: this.state.comment.filter(word => !word.includes(insult))})
        }
    }
    componentDidMount(){
        this.filterComment()
    }
    render(){
        const { commet } =this.state
        console.log(comment)
        return(
            <>
                <h2>{comment.join(' ')}</h2>
            </>
        )
    }
}

export default CommentFilter