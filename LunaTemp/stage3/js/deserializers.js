var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointSpring' )
  var i449 = data
  i448.spring = i449[0]
  i448.damper = i449[1]
  i448.targetPosition = i449[2]
  return i448
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointMotor' )
  var i451 = data
  i450.m_TargetVelocity = i451[0]
  i450.m_Force = i451[1]
  i450.m_FreeSpin = i451[2]
  return i450
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointLimits' )
  var i453 = data
  i452.m_Min = i453[0]
  i452.m_Max = i453[1]
  i452.m_Bounciness = i453[2]
  i452.m_BounceMinVelocity = i453[3]
  i452.m_ContactDistance = i453[4]
  i452.minBounce = i453[5]
  i452.maxBounce = i453[6]
  return i452
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointDrive' )
  var i455 = data
  i454.m_PositionSpring = i455[0]
  i454.m_PositionDamper = i455[1]
  i454.m_MaximumForce = i455[2]
  i454.m_UseAcceleration = i455[3]
  return i454
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i457 = data
  i456.m_Spring = i457[0]
  i456.m_Damper = i457[1]
  return i456
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i459 = data
  i458.m_Limit = i459[0]
  i458.m_Bounciness = i459[1]
  i458.m_ContactDistance = i459[2]
  return i458
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i461 = data
  i460.m_ExtremumSlip = i461[0]
  i460.m_ExtremumValue = i461[1]
  i460.m_AsymptoteSlip = i461[2]
  i460.m_AsymptoteValue = i461[3]
  i460.m_Stiffness = i461[4]
  return i460
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i463 = data
  i462.m_LowerAngle = i463[0]
  i462.m_UpperAngle = i463[1]
  return i462
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i465 = data
  i464.m_MotorSpeed = i465[0]
  i464.m_MaximumMotorTorque = i465[1]
  return i464
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i467 = data
  i466.m_DampingRatio = i467[0]
  i466.m_Frequency = i467[1]
  i466.m_Angle = i467[2]
  return i466
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i469 = data
  i468.m_LowerTranslation = i469[0]
  i468.m_UpperTranslation = i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i470 = root || new pc.UnityMaterial()
  var i471 = data
  i470.name = i471[0]
  request.r(i471[1], i471[2], 0, i470, 'shader')
  i470.renderQueue = i471[3]
  i470.enableInstancing = !!i471[4]
  var i473 = i471[5]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i473[i + 0]) );
  }
  i470.floatParameters = i472
  var i475 = i471[6]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i475[i + 0]) );
  }
  i470.colorParameters = i474
  var i477 = i471[7]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i477[i + 0]) );
  }
  i470.vectorParameters = i476
  var i479 = i471[8]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i479[i + 0]) );
  }
  i470.textureParameters = i478
  var i481 = i471[9]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i481[i + 0]) );
  }
  i470.materialFlags = i480
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i485 = data
  i484.name = i485[0]
  i484.value = i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i489 = data
  i488.name = i489[0]
  i488.value = new pc.Color(i489[1], i489[2], i489[3], i489[4])
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i493 = data
  i492.name = i493[0]
  i492.value = new pc.Vec4( i493[1], i493[2], i493[3], i493[4] )
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i497 = data
  i496.name = i497[0]
  request.r(i497[1], i497[2], 0, i496, 'value')
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i501 = data
  i500.name = i501[0]
  i500.enabled = !!i501[1]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i503 = data
  i502.name = i503[0]
  i502.width = i503[1]
  i502.height = i503[2]
  i502.mipmapCount = i503[3]
  i502.anisoLevel = i503[4]
  i502.filterMode = i503[5]
  i502.hdr = !!i503[6]
  i502.format = i503[7]
  i502.wrapMode = i503[8]
  i502.alphaIsTransparency = !!i503[9]
  i502.alphaSource = i503[10]
  i502.graphicsFormat = i503[11]
  i502.sRGBTexture = !!i503[12]
  i502.desiredColorSpace = i503[13]
  i502.wrapU = i503[14]
  i502.wrapV = i503[15]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i505 = data
  i504.position = new pc.Vec3( i505[0], i505[1], i505[2] )
  i504.scale = new pc.Vec3( i505[3], i505[4], i505[5] )
  i504.rotation = new pc.Quat(i505[6], i505[7], i505[8], i505[9])
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i507 = data
  i506.enabled = !!i507[0]
  request.r(i507[1], i507[2], 0, i506, 'sharedMaterial')
  var i509 = i507[3]
  var i508 = []
  for(var i = 0; i < i509.length; i += 2) {
  request.r(i509[i + 0], i509[i + 1], 2, i508, '')
  }
  i506.sharedMaterials = i508
  i506.receiveShadows = !!i507[4]
  i506.shadowCastingMode = i507[5]
  i506.sortingLayerID = i507[6]
  i506.sortingOrder = i507[7]
  i506.lightmapIndex = i507[8]
  i506.lightmapSceneIndex = i507[9]
  i506.lightmapScaleOffset = new pc.Vec4( i507[10], i507[11], i507[12], i507[13] )
  i506.lightProbeUsage = i507[14]
  i506.reflectionProbeUsage = i507[15]
  i506.color = new pc.Color(i507[16], i507[17], i507[18], i507[19])
  request.r(i507[20], i507[21], 0, i506, 'sprite')
  i506.flipX = !!i507[22]
  i506.flipY = !!i507[23]
  i506.drawMode = i507[24]
  i506.size = new pc.Vec2( i507[25], i507[26] )
  i506.tileMode = i507[27]
  i506.adaptiveModeThreshold = i507[28]
  i506.maskInteraction = i507[29]
  i506.spriteSortPoint = i507[30]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i513 = data
  i512.bodyType = i513[0]
  request.r(i513[1], i513[2], 0, i512, 'material')
  i512.simulated = !!i513[3]
  i512.useAutoMass = !!i513[4]
  i512.mass = i513[5]
  i512.drag = i513[6]
  i512.angularDrag = i513[7]
  i512.gravityScale = i513[8]
  i512.collisionDetectionMode = i513[9]
  i512.sleepMode = i513[10]
  i512.constraints = i513[11]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i515 = data
  i514.radius = i515[0]
  i514.enabled = !!i515[1]
  i514.isTrigger = !!i515[2]
  i514.usedByEffector = !!i515[3]
  i514.density = i515[4]
  i514.offset = new pc.Vec2( i515[5], i515[6] )
  request.r(i515[7], i515[8], 0, i514, 'material')
  return i514
}

Deserializers["DragThrow"] = function (request, data, root) {
  var i516 = root || request.c( 'DragThrow' )
  var i517 = data
  request.r(i517[0], i517[1], 0, i516, 'rb')
  request.r(i517[2], i517[3], 0, i516, 'touchArea')
  i516.forceMultiplier = i517[4]
  i516.maxSpeed = i517[5]
  i516.arcBoost = i517[6]
  i516.minDragDist = i517[7]
  return i516
}

Deserializers["Depth"] = function (request, data, root) {
  var i518 = root || request.c( 'Depth' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'ballRb')
  request.r(i519[2], i519[3], 0, i518, 'board')
  request.r(i519[4], i519[5], 0, i518, 'net')
  request.r(i519[6], i519[7], 0, i518, 'ball')
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i521 = data
  i520.name = i521[0]
  i520.tagId = i521[1]
  i520.enabled = !!i521[2]
  i520.isStatic = !!i521[3]
  i520.layer = i521[4]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i523 = data
  i522.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i523[0], i522.main)
  i522.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i523[1], i522.colorBySpeed)
  i522.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i523[2], i522.colorOverLifetime)
  i522.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i523[3], i522.emission)
  i522.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i523[4], i522.rotationBySpeed)
  i522.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i523[5], i522.rotationOverLifetime)
  i522.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i523[6], i522.shape)
  i522.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i523[7], i522.sizeBySpeed)
  i522.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i523[8], i522.sizeOverLifetime)
  i522.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i523[9], i522.textureSheetAnimation)
  i522.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i523[10], i522.velocityOverLifetime)
  i522.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i523[11], i522.noise)
  i522.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i523[12], i522.inheritVelocity)
  i522.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i523[13], i522.forceOverLifetime)
  i522.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i523[14], i522.limitVelocityOverLifetime)
  i522.useAutoRandomSeed = !!i523[15]
  i522.randomSeed = i523[16]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i524 = root || new pc.ParticleSystemMain()
  var i525 = data
  i524.duration = i525[0]
  i524.loop = !!i525[1]
  i524.prewarm = !!i525[2]
  i524.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[3], i524.startDelay)
  i524.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[4], i524.startLifetime)
  i524.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[5], i524.startSpeed)
  i524.startSize3D = !!i525[6]
  i524.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[7], i524.startSizeX)
  i524.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[8], i524.startSizeY)
  i524.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[9], i524.startSizeZ)
  i524.startRotation3D = !!i525[10]
  i524.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[11], i524.startRotationX)
  i524.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[12], i524.startRotationY)
  i524.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[13], i524.startRotationZ)
  i524.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i525[14], i524.startColor)
  i524.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[15], i524.gravityModifier)
  i524.simulationSpace = i525[16]
  request.r(i525[17], i525[18], 0, i524, 'customSimulationSpace')
  i524.simulationSpeed = i525[19]
  i524.useUnscaledTime = !!i525[20]
  i524.scalingMode = i525[21]
  i524.playOnAwake = !!i525[22]
  i524.maxParticles = i525[23]
  i524.emitterVelocityMode = i525[24]
  i524.stopAction = i525[25]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i526 = root || new pc.MinMaxCurve()
  var i527 = data
  i526.mode = i527[0]
  i526.curveMin = new pc.AnimationCurve( { keys_flow: i527[1] } )
  i526.curveMax = new pc.AnimationCurve( { keys_flow: i527[2] } )
  i526.curveMultiplier = i527[3]
  i526.constantMin = i527[4]
  i526.constantMax = i527[5]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i528 = root || new pc.MinMaxGradient()
  var i529 = data
  i528.mode = i529[0]
  i528.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i529[1], i528.gradientMin)
  i528.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i529[2], i528.gradientMax)
  i528.colorMin = new pc.Color(i529[3], i529[4], i529[5], i529[6])
  i528.colorMax = new pc.Color(i529[7], i529[8], i529[9], i529[10])
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i531 = data
  i530.mode = i531[0]
  var i533 = i531[1]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i533[i + 0]) );
  }
  i530.colorKeys = i532
  var i535 = i531[2]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i535[i + 0]) );
  }
  i530.alphaKeys = i534
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i539 = data
  i538.color = new pc.Color(i539[0], i539[1], i539[2], i539[3])
  i538.time = i539[4]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i543 = data
  i542.alpha = i543[0]
  i542.time = i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i544 = root || new pc.ParticleSystemColorBySpeed()
  var i545 = data
  i544.enabled = !!i545[0]
  i544.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i545[1], i544.color)
  i544.range = new pc.Vec2( i545[2], i545[3] )
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i546 = root || new pc.ParticleSystemColorOverLifetime()
  var i547 = data
  i546.enabled = !!i547[0]
  i546.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i547[1], i546.color)
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i548 = root || new pc.ParticleSystemEmitter()
  var i549 = data
  i548.enabled = !!i549[0]
  i548.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[1], i548.rateOverTime)
  i548.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[2], i548.rateOverDistance)
  var i551 = i549[3]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i551[i + 0]) );
  }
  i548.bursts = i550
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemBurst()
  var i555 = data
  i554.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[0], i554.count)
  i554.cycleCount = i555[1]
  i554.minCount = i555[2]
  i554.maxCount = i555[3]
  i554.repeatInterval = i555[4]
  i554.time = i555[5]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemRotationBySpeed()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[1], i556.x)
  i556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[2], i556.y)
  i556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[3], i556.z)
  i556.separateAxes = !!i557[4]
  i556.range = new pc.Vec2( i557[5], i557[6] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemRotationOverLifetime()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[1], i558.x)
  i558.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[2], i558.y)
  i558.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[3], i558.z)
  i558.separateAxes = !!i559[4]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemShape()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.shapeType = i561[1]
  i560.randomDirectionAmount = i561[2]
  i560.sphericalDirectionAmount = i561[3]
  i560.randomPositionAmount = i561[4]
  i560.alignToDirection = !!i561[5]
  i560.radius = i561[6]
  i560.radiusMode = i561[7]
  i560.radiusSpread = i561[8]
  i560.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[9], i560.radiusSpeed)
  i560.radiusThickness = i561[10]
  i560.angle = i561[11]
  i560.length = i561[12]
  i560.boxThickness = new pc.Vec3( i561[13], i561[14], i561[15] )
  i560.meshShapeType = i561[16]
  request.r(i561[17], i561[18], 0, i560, 'mesh')
  request.r(i561[19], i561[20], 0, i560, 'meshRenderer')
  request.r(i561[21], i561[22], 0, i560, 'skinnedMeshRenderer')
  i560.useMeshMaterialIndex = !!i561[23]
  i560.meshMaterialIndex = i561[24]
  i560.useMeshColors = !!i561[25]
  i560.normalOffset = i561[26]
  i560.arc = i561[27]
  i560.arcMode = i561[28]
  i560.arcSpread = i561[29]
  i560.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[30], i560.arcSpeed)
  i560.donutRadius = i561[31]
  i560.position = new pc.Vec3( i561[32], i561[33], i561[34] )
  i560.rotation = new pc.Vec3( i561[35], i561[36], i561[37] )
  i560.scale = new pc.Vec3( i561[38], i561[39], i561[40] )
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemSizeBySpeed()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[1], i562.x)
  i562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[2], i562.y)
  i562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[3], i562.z)
  i562.separateAxes = !!i563[4]
  i562.range = new pc.Vec2( i563[5], i563[6] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemSizeOverLifetime()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[1], i564.x)
  i564.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[2], i564.y)
  i564.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[3], i564.z)
  i564.separateAxes = !!i565[4]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.mode = i567[1]
  i566.animation = i567[2]
  i566.numTilesX = i567[3]
  i566.numTilesY = i567[4]
  i566.useRandomRow = !!i567[5]
  i566.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[6], i566.frameOverTime)
  i566.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[7], i566.startFrame)
  i566.cycleCount = i567[8]
  i566.rowIndex = i567[9]
  i566.flipU = i567[10]
  i566.flipV = i567[11]
  i566.spriteCount = i567[12]
  var i569 = i567[13]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i566.sprites = i568
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[1], i572.x)
  i572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.y)
  i572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[3], i572.z)
  i572.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[4], i572.radial)
  i572.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[5], i572.speedModifier)
  i572.space = i573[6]
  i572.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[7], i572.orbitalX)
  i572.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[8], i572.orbitalY)
  i572.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[9], i572.orbitalZ)
  i572.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[10], i572.orbitalOffsetX)
  i572.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[11], i572.orbitalOffsetY)
  i572.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[12], i572.orbitalOffsetZ)
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemNoise()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.separateAxes = !!i575[1]
  i574.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.strengthX)
  i574.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.strengthY)
  i574.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[4], i574.strengthZ)
  i574.frequency = i575[5]
  i574.damping = !!i575[6]
  i574.octaveCount = i575[7]
  i574.octaveMultiplier = i575[8]
  i574.octaveScale = i575[9]
  i574.quality = i575[10]
  i574.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[11], i574.scrollSpeed)
  i574.scrollSpeedMultiplier = i575[12]
  i574.remapEnabled = !!i575[13]
  i574.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[14], i574.remapX)
  i574.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[15], i574.remapY)
  i574.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[16], i574.remapZ)
  i574.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[17], i574.positionAmount)
  i574.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[18], i574.rotationAmount)
  i574.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[19], i574.sizeAmount)
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemInheritVelocity()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.mode = i577[1]
  i576.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.curve)
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemForceOverLifetime()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.x)
  i578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.y)
  i578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[3], i578.z)
  i578.space = i579[4]
  i578.randomized = !!i579[5]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[1], i580.limit)
  i580.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[2], i580.limitX)
  i580.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[3], i580.limitY)
  i580.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[4], i580.limitZ)
  i580.dampen = i581[5]
  i580.separateAxes = !!i581[6]
  i580.space = i581[7]
  i580.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[8], i580.drag)
  i580.multiplyDragByParticleSize = !!i581[9]
  i580.multiplyDragByParticleVelocity = !!i581[10]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i583 = data
  i582.enabled = !!i583[0]
  request.r(i583[1], i583[2], 0, i582, 'sharedMaterial')
  var i585 = i583[3]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.sharedMaterials = i584
  i582.receiveShadows = !!i583[4]
  i582.shadowCastingMode = i583[5]
  i582.sortingLayerID = i583[6]
  i582.sortingOrder = i583[7]
  i582.lightmapIndex = i583[8]
  i582.lightmapSceneIndex = i583[9]
  i582.lightmapScaleOffset = new pc.Vec4( i583[10], i583[11], i583[12], i583[13] )
  i582.lightProbeUsage = i583[14]
  i582.reflectionProbeUsage = i583[15]
  request.r(i583[16], i583[17], 0, i582, 'mesh')
  i582.meshCount = i583[18]
  i582.activeVertexStreamsCount = i583[19]
  i582.alignment = i583[20]
  i582.renderMode = i583[21]
  i582.sortMode = i583[22]
  i582.lengthScale = i583[23]
  i582.velocityScale = i583[24]
  i582.cameraVelocityScale = i583[25]
  i582.normalDirection = i583[26]
  i582.sortingFudge = i583[27]
  i582.minParticleSize = i583[28]
  i582.maxParticleSize = i583[29]
  i582.pivot = new pc.Vec3( i583[30], i583[31], i583[32] )
  request.r(i583[33], i583[34], 0, i582, 'trailMaterial')
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i587 = data
  i586.name = i587[0]
  i586.index = i587[1]
  i586.startup = !!i587[2]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i589 = data
  i588.enabled = !!i589[0]
  i588.aspect = i589[1]
  i588.orthographic = !!i589[2]
  i588.orthographicSize = i589[3]
  i588.backgroundColor = new pc.Color(i589[4], i589[5], i589[6], i589[7])
  i588.nearClipPlane = i589[8]
  i588.farClipPlane = i589[9]
  i588.fieldOfView = i589[10]
  i588.depth = i589[11]
  i588.clearFlags = i589[12]
  i588.cullingMask = i589[13]
  i588.rect = i589[14]
  request.r(i589[15], i589[16], 0, i588, 'targetTexture')
  i588.usePhysicalProperties = !!i589[17]
  i588.focalLength = i589[18]
  i588.sensorSize = new pc.Vec2( i589[19], i589[20] )
  i588.lensShift = new pc.Vec2( i589[21], i589[22] )
  i588.gateFit = i589[23]
  i588.commandBufferCount = i589[24]
  i588.cameraType = i589[25]
  return i588
}

Deserializers["HandAnimation"] = function (request, data, root) {
  var i590 = root || request.c( 'HandAnimation' )
  var i591 = data
  i590.moveDuration = i591[0]
  i590.fadeDuration = i591[1]
  i590.startY = i591[2]
  i590.endY = i591[3]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i593 = data
  i592.size = new pc.Vec2( i593[0], i593[1] )
  i592.direction = i593[2]
  i592.enabled = !!i593[3]
  i592.isTrigger = !!i593[4]
  i592.usedByEffector = !!i593[5]
  i592.density = i593[6]
  i592.offset = new pc.Vec2( i593[7], i593[8] )
  request.r(i593[9], i593[10], 0, i592, 'material')
  return i592
}

Deserializers["Score"] = function (request, data, root) {
  var i594 = root || request.c( 'Score' )
  var i595 = data
  i594.maxScore = i595[0]
  i594.currentScore = i595[1]
  request.r(i595[2], i595[3], 0, i594, 'ballY')
  request.r(i595[4], i595[5], 0, i594, 'portraitScoreText')
  request.r(i595[6], i595[7], 0, i594, 'landscapeScoreText')
  request.r(i595[8], i595[9], 0, i594, 'particleEffect')
  request.r(i595[10], i595[11], 0, i594, 'scoreSFX')
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i597 = data
  i596.usedByComposite = !!i597[0]
  i596.autoTiling = !!i597[1]
  i596.size = new pc.Vec2( i597[2], i597[3] )
  i596.edgeRadius = i597[4]
  i596.enabled = !!i597[5]
  i596.isTrigger = !!i597[6]
  i596.usedByEffector = !!i597[7]
  i596.density = i597[8]
  i596.offset = new pc.Vec2( i597[9], i597[10] )
  request.r(i597[11], i597[12], 0, i596, 'material')
  return i596
}

Deserializers["BallSpawner"] = function (request, data, root) {
  var i598 = root || request.c( 'BallSpawner' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'firstBall')
  request.r(i599[2], i599[3], 0, i598, 'firstBallRb')
  request.r(i599[4], i599[5], 0, i598, 'firstBallDragThrow')
  request.r(i599[6], i599[7], 0, i598, 'firstBallDepth')
  return i598
}

Deserializers["AnimateHoop"] = function (request, data, root) {
  var i600 = root || request.c( 'AnimateHoop' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'net')
  request.r(i601[2], i601[3], 0, i600, 'board')
  return i600
}

Deserializers["OrientationManager"] = function (request, data, root) {
  var i602 = root || request.c( 'OrientationManager' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'portraitUI')
  request.r(i603[2], i603[3], 0, i602, 'landscapeUI')
  return i602
}

Deserializers["CameraBoundsColliders"] = function (request, data, root) {
  var i604 = root || request.c( 'CameraBoundsColliders' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'cam')
  request.r(i605[2], i605[3], 0, i604, 'topCollider')
  request.r(i605[4], i605[5], 0, i604, 'leftCollider')
  request.r(i605[6], i605[7], 0, i604, 'rightCollider')
  return i604
}

Deserializers["ButtonScripts"] = function (request, data, root) {
  var i606 = root || request.c( 'ButtonScripts' )
  var i607 = data
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i609 = data
  i608.pivot = new pc.Vec2( i609[0], i609[1] )
  i608.anchorMin = new pc.Vec2( i609[2], i609[3] )
  i608.anchorMax = new pc.Vec2( i609[4], i609[5] )
  i608.sizeDelta = new pc.Vec2( i609[6], i609[7] )
  i608.anchoredPosition3D = new pc.Vec3( i609[8], i609[9], i609[10] )
  i608.rotation = new pc.Quat(i609[11], i609[12], i609[13], i609[14])
  i608.scale = new pc.Vec3( i609[15], i609[16], i609[17] )
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i611 = data
  i610.enabled = !!i611[0]
  i610.planeDistance = i611[1]
  i610.referencePixelsPerUnit = i611[2]
  i610.isFallbackOverlay = !!i611[3]
  i610.renderMode = i611[4]
  i610.renderOrder = i611[5]
  i610.sortingLayerName = i611[6]
  i610.sortingOrder = i611[7]
  i610.scaleFactor = i611[8]
  request.r(i611[9], i611[10], 0, i610, 'worldCamera')
  i610.overrideSorting = !!i611[11]
  i610.pixelPerfect = !!i611[12]
  i610.targetDisplay = i611[13]
  i610.overridePixelPerfect = !!i611[14]
  return i610
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i613 = data
  i612.m_UiScaleMode = i613[0]
  i612.m_ReferencePixelsPerUnit = i613[1]
  i612.m_ScaleFactor = i613[2]
  i612.m_ReferenceResolution = new pc.Vec2( i613[3], i613[4] )
  i612.m_ScreenMatchMode = i613[5]
  i612.m_MatchWidthOrHeight = i613[6]
  i612.m_PhysicalUnit = i613[7]
  i612.m_FallbackScreenDPI = i613[8]
  i612.m_DefaultSpriteDPI = i613[9]
  i612.m_DynamicPixelsPerUnit = i613[10]
  i612.m_PresetInfoIsWorld = !!i613[11]
  return i612
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i615 = data
  i614.m_IgnoreReversedGraphics = !!i615[0]
  i614.m_BlockingObjects = i615[1]
  i614.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i615[2] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i617 = data
  i616.cullTransparentMesh = !!i617[0]
  return i616
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.Image' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'm_Sprite')
  i618.m_Type = i619[2]
  i618.m_PreserveAspect = !!i619[3]
  i618.m_FillCenter = !!i619[4]
  i618.m_FillMethod = i619[5]
  i618.m_FillAmount = i619[6]
  i618.m_FillClockwise = !!i619[7]
  i618.m_FillOrigin = i619[8]
  i618.m_UseSpriteMesh = !!i619[9]
  i618.m_PixelsPerUnitMultiplier = i619[10]
  request.r(i619[11], i619[12], 0, i618, 'm_Material')
  i618.m_Maskable = !!i619[13]
  i618.m_Color = new pc.Color(i619[14], i619[15], i619[16], i619[17])
  i618.m_RaycastTarget = !!i619[18]
  i618.m_RaycastPadding = new pc.Vec4( i619[19], i619[20], i619[21], i619[22] )
  return i618
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.Text' )
  var i621 = data
  i620.m_FontData = request.d('UnityEngine.UI.FontData', i621[0], i620.m_FontData)
  i620.m_Text = i621[1]
  request.r(i621[2], i621[3], 0, i620, 'm_Material')
  i620.m_Maskable = !!i621[4]
  i620.m_Color = new pc.Color(i621[5], i621[6], i621[7], i621[8])
  i620.m_RaycastTarget = !!i621[9]
  i620.m_RaycastPadding = new pc.Vec4( i621[10], i621[11], i621[12], i621[13] )
  return i620
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.FontData' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'm_Font')
  i622.m_FontSize = i623[2]
  i622.m_FontStyle = i623[3]
  i622.m_BestFit = !!i623[4]
  i622.m_MinSize = i623[5]
  i622.m_MaxSize = i623[6]
  i622.m_Alignment = i623[7]
  i622.m_AlignByGeometry = !!i623[8]
  i622.m_RichText = !!i623[9]
  i622.m_HorizontalOverflow = i623[10]
  i622.m_VerticalOverflow = i623[11]
  i622.m_LineSpacing = i623[12]
  return i622
}

Deserializers["LevelUpManager"] = function (request, data, root) {
  var i624 = root || request.c( 'LevelUpManager' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'content')
  request.r(i625[2], i625[3], 0, i624, 'score')
  request.r(i625[4], i625[5], 0, i624, 'canvasGroup')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i627 = data
  i626.m_Alpha = i627[0]
  i626.m_Interactable = !!i627[1]
  i626.m_BlocksRaycasts = !!i627[2]
  i626.m_IgnoreParentGroups = !!i627[3]
  i626.enabled = !!i627[4]
  return i626
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.UI.Button' )
  var i629 = data
  i628.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i629[0], i628.m_OnClick)
  i628.m_Navigation = request.d('UnityEngine.UI.Navigation', i629[1], i628.m_Navigation)
  i628.m_Transition = i629[2]
  i628.m_Colors = request.d('UnityEngine.UI.ColorBlock', i629[3], i628.m_Colors)
  i628.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i629[4], i628.m_SpriteState)
  i628.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i629[5], i628.m_AnimationTriggers)
  i628.m_Interactable = !!i629[6]
  request.r(i629[7], i629[8], 0, i628, 'm_TargetGraphic')
  return i628
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i631 = data
  i630.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i631[0], i630.m_PersistentCalls)
  return i630
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i633 = data
  var i635 = i633[0]
  var i634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i635.length; i += 1) {
    i634.add(request.d('UnityEngine.Events.PersistentCall', i635[i + 0]));
  }
  i632.m_Calls = i634
  return i632
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'm_Target')
  i638.m_TargetAssemblyTypeName = i639[2]
  i638.m_MethodName = i639[3]
  i638.m_Mode = i639[4]
  i638.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i639[5], i638.m_Arguments)
  i638.m_CallState = i639[6]
  return i638
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'm_ObjectArgument')
  i640.m_ObjectArgumentAssemblyTypeName = i641[2]
  i640.m_IntArgument = i641[3]
  i640.m_FloatArgument = i641[4]
  i640.m_StringArgument = i641[5]
  i640.m_BoolArgument = !!i641[6]
  return i640
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i643 = data
  i642.m_Mode = i643[0]
  i642.m_WrapAround = !!i643[1]
  request.r(i643[2], i643[3], 0, i642, 'm_SelectOnUp')
  request.r(i643[4], i643[5], 0, i642, 'm_SelectOnDown')
  request.r(i643[6], i643[7], 0, i642, 'm_SelectOnLeft')
  request.r(i643[8], i643[9], 0, i642, 'm_SelectOnRight')
  return i642
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i645 = data
  i644.m_NormalColor = new pc.Color(i645[0], i645[1], i645[2], i645[3])
  i644.m_HighlightedColor = new pc.Color(i645[4], i645[5], i645[6], i645[7])
  i644.m_PressedColor = new pc.Color(i645[8], i645[9], i645[10], i645[11])
  i644.m_SelectedColor = new pc.Color(i645[12], i645[13], i645[14], i645[15])
  i644.m_DisabledColor = new pc.Color(i645[16], i645[17], i645[18], i645[19])
  i644.m_ColorMultiplier = i645[20]
  i644.m_FadeDuration = i645[21]
  return i644
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'm_HighlightedSprite')
  request.r(i647[2], i647[3], 0, i646, 'm_PressedSprite')
  request.r(i647[4], i647[5], 0, i646, 'm_SelectedSprite')
  request.r(i647[6], i647[7], 0, i646, 'm_DisabledSprite')
  return i646
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i649 = data
  i648.m_NormalTrigger = i649[0]
  i648.m_HighlightedTrigger = i649[1]
  i648.m_PressedTrigger = i649[2]
  i648.m_SelectedTrigger = i649[3]
  i648.m_DisabledTrigger = i649[4]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'animatorController')
  request.r(i651[2], i651[3], 0, i650, 'avatar')
  i650.updateMode = i651[4]
  i650.hasTransformHierarchy = !!i651[5]
  i650.applyRootMotion = !!i651[6]
  var i653 = i651[7]
  var i652 = []
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 2, i652, '')
  }
  i650.humanBones = i652
  i650.enabled = !!i651[8]
  return i650
}

Deserializers["LevelFailManager"] = function (request, data, root) {
  var i656 = root || request.c( 'LevelFailManager' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'content')
  request.r(i657[2], i657[3], 0, i656, 'score')
  request.r(i657[4], i657[5], 0, i656, 'canvasGroup')
  request.r(i657[6], i657[7], 0, i656, 'ball')
  return i656
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'm_FirstSelected')
  i658.m_sendNavigationEvents = !!i659[2]
  i658.m_DragThreshold = i659[3]
  return i658
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i661 = data
  i660.m_HorizontalAxis = i661[0]
  i660.m_VerticalAxis = i661[1]
  i660.m_SubmitButton = i661[2]
  i660.m_CancelButton = i661[3]
  i660.m_InputActionsPerSecond = i661[4]
  i660.m_RepeatDelay = i661[5]
  i660.m_ForceModuleActive = !!i661[6]
  i660.m_SendPointerHoverToParent = !!i661[7]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i663 = data
  i662.ambientIntensity = i663[0]
  i662.reflectionIntensity = i663[1]
  i662.ambientMode = i663[2]
  i662.ambientLight = new pc.Color(i663[3], i663[4], i663[5], i663[6])
  i662.ambientSkyColor = new pc.Color(i663[7], i663[8], i663[9], i663[10])
  i662.ambientGroundColor = new pc.Color(i663[11], i663[12], i663[13], i663[14])
  i662.ambientEquatorColor = new pc.Color(i663[15], i663[16], i663[17], i663[18])
  i662.fogColor = new pc.Color(i663[19], i663[20], i663[21], i663[22])
  i662.fogEndDistance = i663[23]
  i662.fogStartDistance = i663[24]
  i662.fogDensity = i663[25]
  i662.fog = !!i663[26]
  request.r(i663[27], i663[28], 0, i662, 'skybox')
  i662.fogMode = i663[29]
  var i665 = i663[30]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i665[i + 0]) );
  }
  i662.lightmaps = i664
  i662.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i663[31], i662.lightProbes)
  i662.lightmapsMode = i663[32]
  i662.mixedBakeMode = i663[33]
  i662.environmentLightingMode = i663[34]
  i662.ambientProbe = new pc.SphericalHarmonicsL2(i663[35])
  i662.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i663[36])
  i662.useReferenceAmbientProbe = !!i663[37]
  request.r(i663[38], i663[39], 0, i662, 'customReflection')
  request.r(i663[40], i663[41], 0, i662, 'defaultReflection')
  i662.defaultReflectionMode = i663[42]
  i662.defaultReflectionResolution = i663[43]
  i662.sunLightObjectId = i663[44]
  i662.pixelLightCount = i663[45]
  i662.defaultReflectionHDR = !!i663[46]
  i662.hasLightDataAsset = !!i663[47]
  i662.hasManualGenerate = !!i663[48]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'lightmapColor')
  request.r(i669[2], i669[3], 0, i668, 'lightmapDirection')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i670 = root || new UnityEngine.LightProbes()
  var i671 = data
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i679 = data
  i678.name = i679[0]
  i678.bounciness = i679[1]
  i678.friction = i679[2]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i681 = data
  var i683 = i681[0]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i683.length; i += 1) {
    i682.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i683[i + 0]));
  }
  i680.ShaderCompilationErrors = i682
  i680.name = i681[1]
  i680.guid = i681[2]
  var i685 = i681[3]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( i685[i + 0] );
  }
  i680.shaderDefinedKeywords = i684
  var i687 = i681[4]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i687[i + 0]) );
  }
  i680.passes = i686
  var i689 = i681[5]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i689[i + 0]) );
  }
  i680.usePasses = i688
  var i691 = i681[6]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i691[i + 0]) );
  }
  i680.defaultParameterValues = i690
  request.r(i681[7], i681[8], 0, i680, 'unityFallbackShader')
  i680.readDepth = !!i681[9]
  i680.isCreatedByShaderGraph = !!i681[10]
  i680.compiled = !!i681[11]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i695 = data
  i694.shaderName = i695[0]
  i694.errorMessage = i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i700 = root || new pc.UnityShaderPass()
  var i701 = data
  i700.id = i701[0]
  i700.subShaderIndex = i701[1]
  i700.name = i701[2]
  i700.passType = i701[3]
  i700.grabPassTextureName = i701[4]
  i700.usePass = !!i701[5]
  i700.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[6], i700.zTest)
  i700.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[7], i700.zWrite)
  i700.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[8], i700.culling)
  i700.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i701[9], i700.blending)
  i700.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i701[10], i700.alphaBlending)
  i700.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[11], i700.colorWriteMask)
  i700.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[12], i700.offsetUnits)
  i700.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[13], i700.offsetFactor)
  i700.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[14], i700.stencilRef)
  i700.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[15], i700.stencilReadMask)
  i700.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[16], i700.stencilWriteMask)
  i700.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i701[17], i700.stencilOp)
  i700.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i701[18], i700.stencilOpFront)
  i700.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i701[19], i700.stencilOpBack)
  var i703 = i701[20]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i703[i + 0]) );
  }
  i700.tags = i702
  var i705 = i701[21]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( i705[i + 0] );
  }
  i700.passDefinedKeywords = i704
  var i707 = i701[22]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i707[i + 0]) );
  }
  i700.passDefinedKeywordGroups = i706
  var i709 = i701[23]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i709[i + 0]) );
  }
  i700.variants = i708
  var i711 = i701[24]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i711[i + 0]) );
  }
  i700.excludedVariants = i710
  i700.hasDepthReader = !!i701[25]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i713 = data
  i712.val = i713[0]
  i712.name = i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i715 = data
  i714.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[0], i714.src)
  i714.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[1], i714.dst)
  i714.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i715[2], i714.op)
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i717 = data
  i716.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[0], i716.pass)
  i716.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[1], i716.fail)
  i716.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[2], i716.zFail)
  i716.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[3], i716.comp)
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i721 = data
  i720.name = i721[0]
  i720.value = i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i725 = data
  var i727 = i725[0]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( i727[i + 0] );
  }
  i724.keywords = i726
  i724.hasDiscard = !!i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i731 = data
  i730.passId = i731[0]
  i730.subShaderIndex = i731[1]
  var i733 = i731[2]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i730.keywords = i732
  i730.vertexProgram = i731[3]
  i730.fragmentProgram = i731[4]
  i730.exportedForWebGl2 = !!i731[5]
  i730.readDepth = !!i731[6]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'shader')
  i736.pass = i737[2]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i741 = data
  i740.name = i741[0]
  i740.type = i741[1]
  i740.value = new pc.Vec4( i741[2], i741[3], i741[4], i741[5] )
  i740.textureValue = i741[6]
  i740.shaderPropertyFlag = i741[7]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i743 = data
  i742.name = i743[0]
  request.r(i743[1], i743[2], 0, i742, 'texture')
  i742.aabb = i743[3]
  i742.vertices = i743[4]
  i742.triangles = i743[5]
  i742.textureRect = UnityEngine.Rect.MinMaxRect(i743[6], i743[7], i743[8], i743[9])
  i742.packedRect = UnityEngine.Rect.MinMaxRect(i743[10], i743[11], i743[12], i743[13])
  i742.border = new pc.Vec4( i743[14], i743[15], i743[16], i743[17] )
  i742.transparency = i743[18]
  i742.bounds = i743[19]
  i742.pixelsPerUnit = i743[20]
  i742.textureWidth = i743[21]
  i742.textureHeight = i743[22]
  i742.nativeSize = new pc.Vec2( i743[23], i743[24] )
  i742.pivot = new pc.Vec2( i743[25], i743[26] )
  i742.textureRectOffset = new pc.Vec2( i743[27], i743[28] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i745 = data
  i744.name = i745[0]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i747 = data
  i746.name = i747[0]
  i746.wrapMode = i747[1]
  i746.isLooping = !!i747[2]
  i746.length = i747[3]
  var i749 = i747[4]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i749[i + 0]) );
  }
  i746.curves = i748
  var i751 = i747[5]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i751[i + 0]) );
  }
  i746.events = i750
  i746.halfPrecision = !!i747[6]
  i746._frameRate = i747[7]
  i746.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i747[8], i746.localBounds)
  i746.hasMuscleCurves = !!i747[9]
  var i753 = i747[10]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i746.clipMuscleConstant = i752
  i746.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i747[11], i746.clipBindingConstant)
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i757 = data
  i756.path = i757[0]
  i756.hash = i757[1]
  i756.componentType = i757[2]
  i756.property = i757[3]
  i756.keys = i757[4]
  var i759 = i757[5]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i759[i + 0]) );
  }
  i756.objectReferenceKeys = i758
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i763 = data
  i762.time = i763[0]
  request.r(i763[1], i763[2], 0, i762, 'value')
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i767 = data
  i766.functionName = i767[0]
  i766.floatParameter = i767[1]
  i766.intParameter = i767[2]
  i766.stringParameter = i767[3]
  request.r(i767[4], i767[5], 0, i766, 'objectReferenceParameter')
  i766.time = i767[6]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i769 = data
  i768.center = new pc.Vec3( i769[0], i769[1], i769[2] )
  i768.extends = new pc.Vec3( i769[3], i769[4], i769[5] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i773 = data
  var i775 = i773[0]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( i775[i + 0] );
  }
  i772.genericBindings = i774
  var i777 = i773[1]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i772.pptrCurveMapping = i776
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i779 = data
  i778.name = i779[0]
  i778.ascent = i779[1]
  i778.originalLineHeight = i779[2]
  i778.fontSize = i779[3]
  var i781 = i779[4]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i781[i + 0]) );
  }
  i778.characterInfo = i780
  request.r(i779[5], i779[6], 0, i778, 'texture')
  i778.originalFontSize = i779[7]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i785 = data
  i784.index = i785[0]
  i784.advance = i785[1]
  i784.bearing = i785[2]
  i784.glyphWidth = i785[3]
  i784.glyphHeight = i785[4]
  i784.minX = i785[5]
  i784.maxX = i785[6]
  i784.minY = i785[7]
  i784.maxY = i785[8]
  i784.uvBottomLeftX = i785[9]
  i784.uvBottomLeftY = i785[10]
  i784.uvBottomRightX = i785[11]
  i784.uvBottomRightY = i785[12]
  i784.uvTopLeftX = i785[13]
  i784.uvTopLeftY = i785[14]
  i784.uvTopRightX = i785[15]
  i784.uvTopRightY = i785[16]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i787 = data
  i786.name = i787[0]
  var i789 = i787[1]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i789[i + 0]) );
  }
  i786.layers = i788
  var i791 = i787[2]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i791[i + 0]) );
  }
  i786.parameters = i790
  i786.animationClips = i787[3]
  i786.avatarUnsupported = i787[4]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i795 = data
  i794.name = i795[0]
  i794.defaultWeight = i795[1]
  i794.blendingMode = i795[2]
  i794.avatarMask = i795[3]
  i794.syncedLayerIndex = i795[4]
  i794.syncedLayerAffectsTiming = !!i795[5]
  i794.syncedLayers = i795[6]
  i794.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i795[7], i794.stateMachine)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i797 = data
  i796.id = i797[0]
  i796.name = i797[1]
  i796.path = i797[2]
  var i799 = i797[3]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i799[i + 0]) );
  }
  i796.states = i798
  var i801 = i797[4]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i801[i + 0]) );
  }
  i796.machines = i800
  var i803 = i797[5]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i803[i + 0]) );
  }
  i796.entryStateTransitions = i802
  var i805 = i797[6]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i805[i + 0]) );
  }
  i796.exitStateTransitions = i804
  var i807 = i797[7]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i807[i + 0]) );
  }
  i796.anyStateTransitions = i806
  i796.defaultStateId = i797[8]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i811 = data
  i810.id = i811[0]
  i810.name = i811[1]
  i810.cycleOffset = i811[2]
  i810.cycleOffsetParameter = i811[3]
  i810.cycleOffsetParameterActive = !!i811[4]
  i810.mirror = !!i811[5]
  i810.mirrorParameter = i811[6]
  i810.mirrorParameterActive = !!i811[7]
  i810.motionId = i811[8]
  i810.nameHash = i811[9]
  i810.fullPathHash = i811[10]
  i810.speed = i811[11]
  i810.speedParameter = i811[12]
  i810.speedParameterActive = !!i811[13]
  i810.tag = i811[14]
  i810.tagHash = i811[15]
  i810.writeDefaultValues = !!i811[16]
  var i813 = i811[17]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.behaviours = i812
  var i815 = i811[18]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i815[i + 0]) );
  }
  i810.transitions = i814
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i821 = data
  i820.fullPath = i821[0]
  i820.canTransitionToSelf = !!i821[1]
  i820.duration = i821[2]
  i820.exitTime = i821[3]
  i820.hasExitTime = !!i821[4]
  i820.hasFixedDuration = !!i821[5]
  i820.interruptionSource = i821[6]
  i820.offset = i821[7]
  i820.orderedInterruption = !!i821[8]
  i820.destinationStateId = i821[9]
  i820.isExit = !!i821[10]
  i820.mute = !!i821[11]
  i820.solo = !!i821[12]
  var i823 = i821[13]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i823[i + 0]) );
  }
  i820.conditions = i822
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i829 = data
  i828.destinationStateId = i829[0]
  i828.isExit = !!i829[1]
  i828.mute = !!i829[2]
  i828.solo = !!i829[3]
  var i831 = i829[4]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i831[i + 0]) );
  }
  i828.conditions = i830
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i835 = data
  i834.defaultBool = !!i835[0]
  i834.defaultFloat = i835[1]
  i834.defaultInt = i835[2]
  i834.name = i835[3]
  i834.nameHash = i835[4]
  i834.type = i835[5]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i837 = data
  var i839 = i837[0]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i839[i + 0]) );
  }
  i836.files = i838
  i836.componentToPrefabIds = i837[1]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i843 = data
  i842.path = i843[0]
  request.r(i843[1], i843[2], 0, i842, 'unityObject')
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i845 = data
  var i847 = i845[0]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i847[i + 0]) );
  }
  i844.scriptsExecutionOrder = i846
  var i849 = i845[1]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i849[i + 0]) );
  }
  i844.sortingLayers = i848
  var i851 = i845[2]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i851[i + 0]) );
  }
  i844.cullingLayers = i850
  i844.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i845[3], i844.timeSettings)
  i844.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i845[4], i844.physicsSettings)
  i844.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i845[5], i844.physics2DSettings)
  i844.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i845[6], i844.qualitySettings)
  i844.enableRealtimeShadows = !!i845[7]
  i844.enableAutoInstancing = !!i845[8]
  i844.enableDynamicBatching = !!i845[9]
  i844.lightmapEncodingQuality = i845[10]
  i844.desiredColorSpace = i845[11]
  var i853 = i845[12]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i844.allTags = i852
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i857 = data
  i856.name = i857[0]
  i856.value = i857[1]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i861 = data
  i860.id = i861[0]
  i860.name = i861[1]
  i860.value = i861[2]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i865 = data
  i864.id = i865[0]
  i864.name = i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i867 = data
  i866.fixedDeltaTime = i867[0]
  i866.maximumDeltaTime = i867[1]
  i866.timeScale = i867[2]
  i866.maximumParticleTimestep = i867[3]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i869 = data
  i868.gravity = new pc.Vec3( i869[0], i869[1], i869[2] )
  i868.defaultSolverIterations = i869[3]
  i868.bounceThreshold = i869[4]
  i868.autoSyncTransforms = !!i869[5]
  i868.autoSimulation = !!i869[6]
  var i871 = i869[7]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i871[i + 0]) );
  }
  i868.collisionMatrix = i870
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i875 = data
  i874.enabled = !!i875[0]
  i874.layerId = i875[1]
  i874.otherLayerId = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'material')
  i876.gravity = new pc.Vec2( i877[2], i877[3] )
  i876.positionIterations = i877[4]
  i876.velocityIterations = i877[5]
  i876.velocityThreshold = i877[6]
  i876.maxLinearCorrection = i877[7]
  i876.maxAngularCorrection = i877[8]
  i876.maxTranslationSpeed = i877[9]
  i876.maxRotationSpeed = i877[10]
  i876.baumgarteScale = i877[11]
  i876.baumgarteTOIScale = i877[12]
  i876.timeToSleep = i877[13]
  i876.linearSleepTolerance = i877[14]
  i876.angularSleepTolerance = i877[15]
  i876.defaultContactOffset = i877[16]
  i876.autoSimulation = !!i877[17]
  i876.queriesHitTriggers = !!i877[18]
  i876.queriesStartInColliders = !!i877[19]
  i876.callbacksOnDisable = !!i877[20]
  i876.reuseCollisionCallbacks = !!i877[21]
  i876.autoSyncTransforms = !!i877[22]
  var i879 = i877[23]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i879[i + 0]) );
  }
  i876.collisionMatrix = i878
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i883 = data
  i882.enabled = !!i883[0]
  i882.layerId = i883[1]
  i882.otherLayerId = i883[2]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i885 = data
  var i887 = i885[0]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i887[i + 0]) );
  }
  i884.qualityLevels = i886
  var i889 = i885[1]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( i889[i + 0] );
  }
  i884.names = i888
  i884.shadows = i885[2]
  i884.anisotropicFiltering = i885[3]
  i884.antiAliasing = i885[4]
  i884.lodBias = i885[5]
  i884.shadowCascades = i885[6]
  i884.shadowDistance = i885[7]
  i884.shadowmaskMode = i885[8]
  i884.shadowProjection = i885[9]
  i884.shadowResolution = i885[10]
  i884.softParticles = !!i885[11]
  i884.softVegetation = !!i885[12]
  i884.activeColorSpace = i885[13]
  i884.desiredColorSpace = i885[14]
  i884.masterTextureLimit = i885[15]
  i884.maxQueuedFrames = i885[16]
  i884.particleRaycastBudget = i885[17]
  i884.pixelLightCount = i885[18]
  i884.realtimeReflectionProbes = !!i885[19]
  i884.shadowCascade2Split = i885[20]
  i884.shadowCascade4Split = new pc.Vec3( i885[21], i885[22], i885[23] )
  i884.streamingMipmapsActive = !!i885[24]
  i884.vSyncCount = i885[25]
  i884.asyncUploadBufferSize = i885[26]
  i884.asyncUploadTimeSlice = i885[27]
  i884.billboardsFaceCameraPosition = !!i885[28]
  i884.shadowNearPlaneOffset = i885[29]
  i884.streamingMipmapsMemoryBudget = i885[30]
  i884.maximumLODLevel = i885[31]
  i884.streamingMipmapsAddAllCameras = !!i885[32]
  i884.streamingMipmapsMaxLevelReduction = i885[33]
  i884.streamingMipmapsRenderersPerFrame = i885[34]
  i884.resolutionScalingFixedDPIFactor = i885[35]
  i884.streamingMipmapsMaxFileIORequests = i885[36]
  i884.currentQualityLevel = i885[37]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i895 = data
  i894.mode = i895[0]
  i894.parameter = i895[1]
  i894.threshold = i895[2]
  return i894
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[13],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[5],"63":[5],"64":[5],"65":[5],"66":[5],"67":[5],"68":[5],"69":[5],"70":[5],"71":[5],"72":[5],"73":[5],"74":[5],"75":[13],"76":[77],"78":[79],"80":[79],"29":[28],"81":[82],"83":[2],"84":[82],"85":[28],"86":[28],"32":[29],"34":[33,28],"87":[28],"31":[29],"88":[28],"89":[28],"90":[28],"91":[28],"92":[28],"93":[28],"94":[28],"95":[28],"96":[28],"97":[33,28],"98":[28],"99":[28],"100":[28],"101":[28],"18":[33,28],"102":[28],"103":[42],"104":[42],"43":[42],"105":[42],"106":[13],"107":[13],"108":[109],"110":[13],"111":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","DragThrow","Depth","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","HandAnimation","UnityEngine.CapsuleCollider2D","Score","UnityEngine.UI.Text","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","UnityEngine.PhysicsMaterial2D","BallSpawner","UnityEngine.GameObject","AnimateHoop","OrientationManager","CameraBoundsColliders","ButtonScripts","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Font","LevelUpManager","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","LevelFailManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f1";

Deserializers.productName = "PlayableAds2D";

Deserializers.lunaInitializationTime = "08/08/2025 10:48:39";

Deserializers.lunaDaysRunning = "12.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "BasketballGame";

Deserializers.lunaAppID = "32056";

Deserializers.projectId = "6224f96624958864f8ba96a25518abe1";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1575";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3300";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.PlayableAds2D";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "654bc257-a1bf-4934-9e35-09facb023a76";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

