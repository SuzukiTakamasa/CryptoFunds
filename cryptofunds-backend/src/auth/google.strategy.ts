import { PassportStrategy } from '@nestjs/passport'
import { Strategy, VerifyCallback } from 'passport-google-oauth20'
import { Injectable} from '@nestjs/common'
import  { ConfigService } from '@nestjs/config'