export default function (session, context) {
    if(session){
        context.res.writeHead(302, {Location: '/login'});
        context.res.end();
    }else{
        context.res.writeHead(302, {Location: '/profile'});
        context.res.end();
    }
}
