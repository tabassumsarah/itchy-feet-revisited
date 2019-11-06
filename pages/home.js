import React from 'react';
import styled from 'styled-components'
import SingleImage from './Image.js'
import Header from "./Header.js";

const AppWrapper = styled.div`
  background-color: #fafafa;
`;

const feedsource = [
    {
        source: '/travel1.jpeg',
        pricing: '300 AUD',
        isVideo: false,
        id: 0
    },
    {
        source: '/travel2.jpeg',
        pricing: '100 AUD',
        isVideo: true,
        id: 1
    },
    {
        source: '/travel3.jpeg',
        pricing: '200 AUD',
        isVideo: false,
        id: 2
    },
    {
        source: '/travel1.jpeg',
        pricing: '200 AUD',
        isVideo: false,
        id: 3
    },
    {
        source: '/travel2.jpeg',
        pricing: '400 AUD',
        isVideo: false,
        id: 4
    },
    {
        source: '/travel3.jpeg',
        pricing: '450 AUD',
        isVideo: false,
        id: 4
    }
]

const ProfileContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`

const ProfileDetails = styled.div`
  display: flex;
`
const ProfileDetailsLeft = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  border: 1px solid #ccc;
  padding: 5px;
`
const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const EditProfileButton = styled.div`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
`

const SurpriseButton = styled.div`
  background-color: orange;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  font-weight: 300;
  padding: 5px 9px;
  height:40px;
  text-transform: capitalize;
  text-align: center;
  font-size: 24px;
  margin-left: 400px;
  margin-right: 400px;
 
`

const HeadingThreeText = styled.h3``

const ParagraphText = styled.p`
  margin-right: 25px;
`

const ProfileDetailsMeta = styled.div`
  display: flex;
  justify-content: center;
`
const ProfileDetailsName = styled.div`
  text-align: left;
`
const ProfileAnnounce = styled.div`
  text-align: left;
  color: orange;
  font-size: 24px;
`
const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`

function Home() {
    return (

        <AppWrapper>

            <Header></Header>

            <ProfileContainer>
                <ProfileDetails>
                    <ProfileDetailsLeft>
                        <ProfileImage src="https://api.adorable.io/avatars/285/abott@adorable.png"></ProfileImage>
                    </ProfileDetailsLeft>

                    <ProfileDetailsRight>

                        <ProfileDetailsUsername>
                            <HeadingThreeText>Sarah Tabassun</HeadingThreeText>
                            <EditProfileButton>Edit profile</EditProfileButton>
                        </ProfileDetailsUsername>

                        <ProfileDetailsMeta>
                            <ParagraphText> Preferred Location : Australia/ Sydney </ParagraphText>
                        </ProfileDetailsMeta>

                        <ProfileAnnounce>
                            <ParagraphText><strong>Today's top destinations for you</strong></ParagraphText>
                        </ProfileAnnounce>

                    </ProfileDetailsRight>

                </ProfileDetails>

                <ImagesWrapper>
                    {feedsource.map(item =>
                        <SingleImage image={item} key={item.id}/>
                    )}
                </ImagesWrapper>
            </ProfileContainer>

            <SurpriseButton>Surprise Me!</SurpriseButton>

        </AppWrapper>

    )
}

export default Home;