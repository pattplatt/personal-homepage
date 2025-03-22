<template>
    <h2 class="text-2xl font-bold mb-4">Contact</h2>

    <div class="flex space-x-10">
        <div class="relative group cursor-pointer" @click="openLink(contactLinks.linkedin)">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-6xl icon-color" />
            <div class="absolute left-1/2 transform -translate-x-1/2 mt-2 px-4 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
            </div>
        </div>
        <div class="relative group cursor-pointer" @click="openLink(contactLinks.github)">
            <font-awesome-icon :icon="['fab', 'github']" class="text-6xl icon-color" />
            <div class="absolute left-1/2 transform -translate-x-1/2 mt-2 px-4 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
            </div>
        </div>
        <div class="relative group cursor-pointer" @click="copyEmail">
            <font-awesome-icon :icon="['fas', 'envelope']" class="text-6xl icon-color" />
            <div class="absolute left-1/2 transform -translate-x-1/2 mt-2 px-4 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {{ contactLinks.email.replace('mailto:', '') }}
            </div>
        </div>
    </div>

</template>

<script setup>
import { contactLinks } from '../data/personal_data.js';

function openLink(url) {
    window.open(url, '_blank');
}

function copyEmail() {
    navigator.clipboard.writeText(contactLinks.email.replace('mailto:', ''));
    alert('Email copied to clipboard!');
}
</script>
