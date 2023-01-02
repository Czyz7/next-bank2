import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export default nextAuth({
    providers: [
        GithubProvider({
            name:'github',
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        // add more providers
    ],
})