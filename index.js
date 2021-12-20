function navbarVisitPageHome() {

    let navbarVisitPageHome = document.getElementById('img-navbar')

    console.log(navbarVisitPageHome)

    navbarVisitPageHome.innerHTML = `<a class="color-home" href="index.html">
                <img id="img-navbar" src="media/home-5-32.png" alt="">
            </a>`
}

function navbarVisitPageBlog() {

    let VisitPageBlog = document.getElementById('blog-navbar')

    console.log(VisitPageBlog)

    VisitPageBlog.innerHTML = `<a id="blog-navbar" class="color-blog" href="blog.html">
                Blog
            </a>`
}

function navbarVisitContactPage() {

    let visitPageContact = document.getElementById('contact-navbar')

    console.log(visitPageContact)

    visitPageContact.innerHTML = `<a id="contact-navbar" class="color-contact" href="contactForm.html">Contact Me<a/>`
}

// document.getElementById('nav-toggle').addEventListener("click", slideNavbar)

// function slideNavbar() {

//     const navbarlistToggle = document.getElementById('navbar-list')
//     navbarlistToggle.innerHTML = `<div id="navbar-list" class="navbar-list">
//                 <ul class="slide">
//                     <li><a href="index.html">Home</a></li>
//                     <li><a href="blog.html">Blog</a></li>
//                     <li><a href="contactForm.html">Contact Me</a></li>
//                 </ul>
//             </div>`
// }

function submitForm() {

    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    if (name == "") {
        alert('please input your name ..')
    } else if (email == "") {
        alert('please input your email ..')
    } else if (phone == "") {
        alert('please input your phone number ..')
    } else if (subject == "") {
        alert('please input your subject ..')
    } else if (message == "") {
        alert('please input your message ..')
    }

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(message)

    let emailReceiver = 'sandriansyah38@gmail.com'

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo my name ${name}, ${message}`
    a.click()
}

let blogs = []

function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')

    image = URL.createObjectURL(image.files[0])

    let blog = {

        title: title,
        content: content,
        image: image,
        author: 'sandriansyah',
        postAt: new Date()
    }
    // console.log(blog)

    blogs.push(blog)
    console.log(blogs)
    renderBlog()
}

function renderBlog() {

    let contentContainer = document.getElementById('contents');
    contentContainer.innerHTML = ""

    for (let i = 0; i < blogs.length; i++) {

        contentContainer.innerHTML += `<div class="blog-list-item">
                                        <div class="blog-image">
                                            <img src="${blogs[i].image}" alt="" />
                                        </div>
                                        <div class="blog-content">
                                            <div class="btn-group">
                                            <button class="btn-edit">Edit Post</button>
                                            <button class="btn-post">Post Blog</button>
                                            </div>
                                            <h1>
                                            <a href="blog-detail.html" target="_blank"
                                                >${blogs[i].title}</a
                                            >
                                            </h1>
                                            <div class="detail-blog-content">
                                            ${getFullTime(blogs[i].postAt)} WIB | ${blogs[i].author}
                                            </div>
                                            <p>${blogs[i].content}</p>
                                            <div style  = "text-align:right; font-size:15px; color:gray;">
                                            ${getDistenceTime(blogs[i].postAt)}`

    }
}

let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Desember'
]

function getFullTime(time) {

    let date = time.getDate()
    let mothIndex = time.getMonth()
    let year = time.getFullYear()


    let hours = time.getHours()
    let minutes = time.getMinutes()

    let fullTime = `${date} ${month[mothIndex]} ${year} ${hours}:${minutes}`

    return fullTime
}

function getDistenceTime(time) {

    let timePost = time
    let timeNow = new Date();

    let distance = timeNow - timePost

    // console.log(timePost)
    // console.log(timeNow)
    // console.log(distance)

    let milisecond = 1000
    let secondInHours = 3600
    let hoursInDay = 23

    let distenceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))

    if (distenceDay >= 1) {
        return `${distenceDay} day ago`
    } else {

        let distenceHours = Math.floor(distance / (1000 * 60 * 60))
        if (distenceHours >= 1) {
            return `${distenceHours} Hours ago`
        } else {

            let distenceMinutes = Math.floor(distance / (1000 * 60))
            if (distenceMinutes >= 1) {
                return `${distenceMinutes} minutes ago`
            } else {
                let distenceSecond = Math.floor(distance / 1000)
                return `${distenceSecond} seconds ago`
            }
        }
    }
}

setInterval(() => {

    renderBlog()

}, 5000)