import {shortenText} from './../utils/functions';
import {wordCount, attachUserName} from './../../server/utils';
import {shortText, longText, posts, users } from './__data__/testData';

test('shortenText should not alter a string under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

test('shortentext shortens text over 100 characters and adds "..."', () => {
    const shorten = shortenText(longText);
    expect(shorten).not.toHaveLength(longText.length);
    expect(shorten.slice(-3)).toBe('...');
});

test('wordCount shuould count words in a sentence', () => {
    expect(wordCount(posts)).toBe(233);
});

test('attachUserName should attach usersfull name to a post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
});

test('attachUserName should remove any post with no matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
});