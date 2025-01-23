import {Component} from 'react'

import {
  Heading,
  MemeOutput,
  MemeGeneratorPage,
  MemeText,
  MainSection,
  FormSection,
  CustomInput,
  CustomLabel,
  CustomButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    imageUrl: '',
    topTextInput: '',
    topText: '',
    bottomTextInput: '',
    bottomText: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    fontSize: `${fontSizesOptionsList[0].optionId}px`,
  }

  onUrlChange = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onTopTextChange = event => {
    this.setState({topTextInput: event.target.value})
  }

  onBottomTextChange = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onFontSizeChange = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault()
    // prettier-ignore
    const {imageUrlInput, topTextInput, bottomTextInput, fontSizeInput} = this.state

    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: `${fontSizeInput}px`,
    })
  }

  renderMemeOutput = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <MemeOutput data-testid="meme" bgImgUrl={imageUrl}>
        <MemeText fontSize={fontSize}>{topText}</MemeText>
        <MemeText fontSize={fontSize}>{bottomText}</MemeText>
      </MemeOutput>
    )
  }

  renderFormSection = () => {
    // prettier-ignore
    const {imageUrlInput, topTextInput, bottomTextInput, fontSizeInput} = this.state

    return (
      <FormSection onSubmit={this.onFormSubmit}>
        <CustomLabel htmlFor="imageUrl">Image URL</CustomLabel>
        <CustomInput
          id="imageUrl"
          type="text"
          placeholder="Enter the Image URL"
          value={imageUrlInput}
          onChange={this.onUrlChange}
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          id="topText"
          type="text"
          placeholder="Enter the Top Text"
          value={topTextInput}
          onChange={this.onTopTextChange}
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          id="bottomText"
          type="text"
          placeholder="Enter the Bottom Text"
          value={bottomTextInput}
          onChange={this.onBottomTextChange}
        />
        <CustomLabel htmlFor="fontSize">Font Size</CustomLabel>
        <CustomInput
          id="fontSize"
          as="select"
          onChange={this.onFontSizeChange}
          value={fontSizeInput}
        >
          {fontSizesOptionsList.map(each => (
            <option key={each.optionId} value={each.optionId}>
              {each.displayText}
            </option>
          ))}
        </CustomInput>
        <CustomButton type="submit">Generate</CustomButton>
      </FormSection>
    )
  }

  render() {
    return (
      <MemeGeneratorPage>
        <Heading>Meme Generator</Heading>
        <MainSection>
          {this.renderMemeOutput()}
          {this.renderFormSection()}
        </MainSection>
      </MemeGeneratorPage>
    )
  }
}

export default MemeGenerator
