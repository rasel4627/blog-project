class AppUrl{
    static BaseUrl = 'http://127.0.0.1:8000/';
    static AllUser = this.BaseUrl+'/AllUser';

    static UserLogin = this.BaseUrl+'/UserLogin';
    
    static UserReg = this.BaseUrl+'/UserReg';
    static SingleUser = this.BaseUrl+'/SingleUser/';
    static AllPost = this.BaseUrl+'/AllPost';
    static StorePost = this.BaseUrl+'/StorePost';
    static PostDetails = this.BaseUrl+'/PostDetails';
}

export default AppUrl;