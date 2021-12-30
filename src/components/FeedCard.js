import React from 'react'
import styled from 'styled-components';
import Stories from './Stories';

const FeedCardContainer = styled.div`
    height: 600px;
    width: 600px;
    border: 1px solid gray;
    margin-top: 10px;
    background-color: white;
    border-radius: 5px;
`
const FeedHeader = styled.div`
    height: 60px;
    border-bottom: 0.8px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    background: white
`

const Profile = styled.div`
    height : 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid hotpink;
    background: url('https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png') no-repeat center center/cover;
`

const Username = styled.h4`
    padding-left: 10px
`

const LeftContainer = styled.div`
    display: flex;
    align-items: center;
`

const RightContainer = styled.div`
    
`
const MediaContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    height: 350px;
    width: 100%;  
`

const ActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: white;
`

const I = styled.i`
    font-size: 1.5rem;
    padding: 0px 5px;

    &:hover{
        color: gray;
    }
`

const FeedDetails = styled.div`
    background-color: white;
    margin-top: 0;
`

const Para = styled.p`
    padding-left: 20px;
`

const ViewComments = styled.p`
    color: gray;
    padding-left: 20px;
`
const Comment = styled.div`
    border-top: 1px solid gray;
    height: 12px;
    display: flex;
    jusify-conent: center;
    align-items: center;
    padding: 15px
`
const CommentInput = styled.input`
    padding: 7px;
    width: 470px;
    border: none;
    outline: none;
`

const Post = styled.button`
    border: none;
    background-color: white;
    color: blue;
    font-weight: 600
`




const FeedCard = () => {

    return (

        <div>
            <FeedCardContainer>
            <FeedHeader>
                <LeftContainer>
                    <Profile />
                    <Username>Akasnha09</Username>
                </LeftContainer>
                <RightContainer>
                    <i class="fa-solid fa-ellipsis"></i>
                </RightContainer>
            </FeedHeader>

            <MediaContainer>
                <Image src ="https://wallpaperaccess.com/full/760289.jpg" />
            </MediaContainer>

            <ActionContainer>
            <LeftContainer>
                <I className ="fa-regular fa-heart"></I>
                <I className="fa-regular fa-comment"></I>
                <I className="fa-solid fa-location-arrow"></I>
            </LeftContainer>
            <RightContainer>
                <I className="fa-regular fa-bookmark"></I>
            </RightContainer>
            </ActionContainer>
            <FeedDetails>
                <Para>4,587 likes</Para>
                <ViewComments>View all 456 comments</ViewComments>
                <Comment>
                    <I className="fa-regular fa-face-smile"></I>
                    <CommentInput placeholder='Add a comment...' />
                    <Post>Post</Post>
                </Comment>
            </FeedDetails>   
        </FeedCardContainer>


        <FeedCardContainer>
            <FeedHeader>
                <LeftContainer>
                    <Profile />
                    <Username>Akasnha09</Username>
                </LeftContainer>
                <RightContainer>
                    <i class="fa-solid fa-ellipsis"></i>
                </RightContainer>
            </FeedHeader>

            <MediaContainer>
                <Image src ="https://wallpaperaccess.com/full/760289.jpg" />
            </MediaContainer>

            <ActionContainer>
            <LeftContainer>
                <I className ="fa-regular fa-heart"></I>
                <I className="fa-regular fa-comment"></I>
                <I className="fa-solid fa-location-arrow"></I>
            </LeftContainer>
            <RightContainer>
                <I className="fa-regular fa-bookmark"></I>
            </RightContainer>
            </ActionContainer>

            <FeedDetails>
            <Para>4,587 likes</Para>
                <ViewComments>View all 456 comments</ViewComments>
                <Comment>
                    <I className="fa-regular fa-face-smile"></I>
                    <CommentInput placeholder='Add a comment...' />
                    <Post>Post</Post>
                </Comment>
            </FeedDetails>   
        </FeedCardContainer>


        <FeedCardContainer>
            <FeedHeader>
                <LeftContainer>
                    <Profile />
                    <Username>Akasnha09</Username>
                </LeftContainer>
                <RightContainer>
                    <i class="fa-solid fa-ellipsis"></i>
                </RightContainer>
            </FeedHeader>

            <MediaContainer>
                <Image src ="https://wallpaperaccess.com/full/760289.jpg" />
            </MediaContainer>

            <ActionContainer>
            <LeftContainer>
                <I className ="fa-regular fa-heart"></I>
                <I className="fa-regular fa-comment"></I>
                <I className="fa-solid fa-location-arrow"></I>
            </LeftContainer>
            <RightContainer>
                <I className="fa-regular fa-bookmark"></I>
            </RightContainer>
            </ActionContainer>

            <FeedDetails>
            <Para>4,587 likes</Para>
                <ViewComments>View all 456 comments</ViewComments>
                <Comment>
                    <I className="fa-regular fa-face-smile"></I>
                    <CommentInput placeholder='Add a comment...' />
                    <Post>Post</Post>
                </Comment>
            </FeedDetails>   
        </FeedCardContainer>
        </div>
        
    )
}

export default FeedCard
