<script lang="ts" setup>
import sprites from '@/assets/images/landscapes';
</script>

<template>
  <v-main>
    <v-parallax
      :src="sprites.river"
      class="h-100"
    >
      <v-container>
        <h1 class="text-h6 text-center mb-6">
          このゲームについて
        </h1>

        <v-card
          title="このゲームについて"
          class="opacity-90 mb-4"
        >
          <v-card-text>
            このゲームは、川岸にいる一団を、登場人物たちが持つ特性を考慮しつつ、条件を満たしながら対岸に渡すゲームです。
            このようなゲームは通称「River Crossing Puzzle」（川渡りパズル）と呼ばれており、古くから世界中で親しまれています。
          </v-card-text>
        </v-card>

        <v-card
          title="推奨環境"
          class="opacity-90 mb-4"
        >
          <v-card-text>
            スマートフォンまたはタブレットの縦向きでのプレイを想定していますが、横向きでもPC（マウス操作）でもプレイは可能です。
          </v-card-text>
        </v-card>

        <v-card
          title="開発環境"
          class="opacity-90 mb-4"
        >
          <v-card-text class="py-1">
            このアプリケーションは
            <a
              href="https://vuetifyjs.com/"
              target="_blank"
              class="text-decoration-none"
            >
              Vuetify 3
            </a>
            で開発しています。
          </v-card-text>
        </v-card>

        <v-card
          title="作者"
          class="opacity-90 mb-4"
        >
          <v-card-text>
            <a
              href="https://github.com/8amjp"
              target="_blank"
              class="text-decoration-none"
            >
              8Games
            </a>
          </v-card-text>
        </v-card>

        <v-card
          title="素材"
          class="opacity-90 mb-4"
        >
          <v-card-text>
            <div>
              BGM:
              <a
                href="https://dova-s.jp/bgm/play14344.html"
                target="_blank"
                class="text-decoration-none"
              >
                RiversideEnd
              </a>
            </div>
            <div>
              イラスト協力:
              <a
                href="https://aipicasso.app/"
                target="_blank"
                class="text-decoration-none"
              >
                AI Picasso
              </a>
            </div>
          </v-card-text>
        </v-card>

        <div class="d-flex justify-center">
          <v-btn
            color="success"
            variant="elevated"
            size="x-large"
            to="/home"
          >
            ホーム画面に戻る
          </v-btn>
        </div>
      </v-container>
      <v-divider class="my-4" />
      <AppFooter />
    </v-parallax>
  </v-main>
</template>
