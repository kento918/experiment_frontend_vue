interface Request<post = undefined, query = undefined> {
   route: string;
   postObject: post;
   queryObject: query;
}
