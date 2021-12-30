import React from 'react'
import styled from 'styled-components'
import Stories from './Stories'

const Container = styled.div`
    padding: 20px;
    position: fixed;
    top: 15;
    width: 300px;
    margin-top: 10vh;
`

const UserDetails = styled.div`
    display: flex;
    justify-content: space-between; 
    margin-bottom: 0
`

const User = styled.div`

`
const UserName = styled.p`
    font-weight: 600;
    margin-bottom: 0;
    padding-left: 5px;
    font-size: 14px;
`
const Name = styled.p`
    font-weight: 600;
    color: gray;
    margin-top: 0;
    font-size: 14px;
`

const Switch = styled.button`
    color: blue;
    outline: none;
    border: none;
    background: #FAFAFA;
    font-weight: 600;
`

const Details = styled.div`
    display: flex;
`


const SuggestionContainer = styled.div`

`
const SuggestionHeading = styled.p`
    font-weight: 600;
    padding: 5px;
    color: gray;
    margin-top: 10px;
    margin-bottom: 0px;
`

const FriendsSuggestion = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0;
    justify-content: space-between;
    margin-bottom: 0px;
`

const Profile = styled.div`
    height : 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid gray;
    background: url('https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500') no-repeat center center/cover;
    margin: 5px;
`

const ProfileDetail = styled.div`
    margin-top: 0;
    padding-left: 10px;
`

const FollowButton = styled.div`
    color: blue;
    outline: none;
    border: none;
    background: #FAFAFA;
    font-weight: 600;
    font-size: 14px;
`
const SuggestionDetail = styled.div`
    display: flex;
    align-items: center;
`

const Heading = styled.p`
    font-weight: 600;
    color: gray;
    margin-top: 0;
    font-size: 12px;
    padding-left: 5px;
`

const Footor = styled.div`
   padding: 5px;
`
const FooterContent = styled.p`
    font-size: 12px;
    font-weight:500;
    color: lightgray;
`


function Suggestions() {
    return (
        <Container>
            <UserDetails>
                <Details>
                <Stories />
                <User>
                    <UserName>Akansha09</UserName>
                    <Name>Akansha chouhan</Name>
                </User>
                </Details>
                <Switch>Switch</Switch>
            </UserDetails>
            

            <SuggestionContainer>
                <SuggestionHeading>Suggestions for you</SuggestionHeading>
                <FriendsSuggestion>
                    <SuggestionDetail>
                    <Profile></Profile>
                    <ProfileDetail>
                    <UserName>akansha99</UserName>
                    <Heading>New on Instagram</Heading>
                    </ProfileDetail>
                    </SuggestionDetail>
                    <FollowButton>Follow</FollowButton>
                </FriendsSuggestion>

                <FriendsSuggestion>
                    <SuggestionDetail>
                    <Profile></Profile>
                    <ProfileDetail>
                    <UserName>akansha99</UserName>
                    <Heading>Suggested for you</Heading>
                    </ProfileDetail>
                    </SuggestionDetail>
                    <FollowButton>Follow</FollowButton>
                </FriendsSuggestion>

                <FriendsSuggestion>
                    <SuggestionDetail>
                    <Profile></Profile>
                    <ProfileDetail>
                    <UserName>akansha99</UserName>
                    <Heading>New on Instagram</Heading>
                    </ProfileDetail>
                    </SuggestionDetail>
                    <FollowButton>Follow</FollowButton>
                </FriendsSuggestion>

                <FriendsSuggestion>
                    <SuggestionDetail>
                    <Profile></Profile>
                    <ProfileDetail>
                    <UserName>akansha99</UserName>
                    <Heading>New on Instagram</Heading>
                    </ProfileDetail>
                    </SuggestionDetail>
                    <FollowButton>Follow</FollowButton>
                </FriendsSuggestion>


                <Footor>
                    <FooterContent>
                    About-Help-Press-API-Jobs-Privacy-Terms-Location -Top Accounts-Hashtacgs-Language<br/> <br/> &copyright; 2021 INSTAGRAM FROM META
                    </FooterContent>
                </Footor>
            </SuggestionContainer>
        </Container>
    )
}

export default Suggestions
