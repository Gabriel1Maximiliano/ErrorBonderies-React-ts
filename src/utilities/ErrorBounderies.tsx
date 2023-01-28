

interface Props {
    children: React.ReactNode;
    fallBackComponent:React.ReactNode;
    renderCondition?: any;
}
interface State {
    hasError:boolean;
    renderCondition?: any;
}
import React from 'react'

export default class ErrorBounderies extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state = {
            hasError: false, 
            renderCondition: props.renderCondition};
        
    }
    static getDerivedStateFromError(error:Error){
        return {hasError : true}
    }
    static getDerivedStateFromProps(props:Props, state:State){
       if(props.renderCondition !== state.renderCondition){
        return { hasError:false, resetCondition:props.renderCondition }
       }
    }
  render() {

    if(this.state.hasError){// da error por falta de la interface para el state
  return this.props.fallBackComponent;
    }
    return this.props.children;
  }
}
