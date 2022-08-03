import {
  EachResourceCardContainer,
  IconAndTitleContainer,
  IconImageTag,
  TitleContainer,
  TitleText,
  CategoryText,
  LinkText,
  DescriptionText,
} from './styledComponents'

const ResourceCard = props => {
  const {eachResource} = props
  const {title, iconUrl, link, description, category} = eachResource

  return (
    <EachResourceCardContainer>
      <IconAndTitleContainer>
        <IconImageTag src={iconUrl} alt={title} />
        <TitleContainer>
          <TitleText>{title}</TitleText>
          <CategoryText>{category}</CategoryText>
        </TitleContainer>
      </IconAndTitleContainer>
      <LinkText>{link}</LinkText>
      <DescriptionText>{description}</DescriptionText>
    </EachResourceCardContainer>
  )
}

export default ResourceCard
