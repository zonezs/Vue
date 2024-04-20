<template>
    <h3>组件的生命周期函数模拟数据调用</h3>

    <ul>
        <li v-for="(item, index) of banner" :key="index">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
        </li>
    </ul>
</template>

<script>
export default {

    // 通常网络数据请求都在 mounted 这个生命周期方法里面进行操作
    mounted() {
        this.updateData()
    },
    data() {
        return {
            banner: []
        }
    },
    methods: {
        updateData() {
            // mock 网络数据请求
            this.banner = [
                {
                    "title": '张三',
                    "desc": '这是个老问题了，报错里已经给出了提示，原因是package-lock.json这个文件里面出现了错误的module。只需要删除掉package-lock.json和node_modules，然后重新执行npm i或者yarn，然后重新运行项目就可以了著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。'
                },
                {
                    "title": '李四',
                    "desc": '解决vite项目启动报错： Cannot find module @rollup/rollup-darwin-arm64'
                },
                {
                    "title": '张三',
                    "desc": '这是个老问题了，报错里已经给出了提示，原因是package-lock.json这个文件里面出现了错误的module。只需要删除掉package-lock.json和node_modules，然后重新执行npm i或者yarn，然后重新运行项目就可以了著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。'
                },
                {
                    "title": '张三',
                    "desc": '这是个老问题了，报错里已经给出了提示，原因是package-lock.json这个文件里面出现了错误的module。只需要删除掉package-lock.json和node_modules，然后重新执行npm i或者yarn，然后重新运行项目就可以了著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。'
                },
                {
                    "title": '张三',
                    "desc": '这是个老问题了，报错里已经给出了提示，原因是package-lock.json这个文件里面出现了错误的module。只需要删除掉package-lock.json和node_modules，然后重新执行npm i或者yarn，然后重新运行项目就可以了著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。'
                },
                {
                    "title": '张三',
                    "desc": '这是个老问题了，报错里已经给出了提示，原因是package-lock.json这个文件里面出现了错误的module。只需要删除掉package-lock.json和node_modules，然后重新执行npm i或者yarn，然后重新运行项目就可以了著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。'
                },
            ]
        }
    }
}
</script>